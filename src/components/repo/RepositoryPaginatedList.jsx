import { useState } from 'react'
import { FlatList, TextInput, View } from 'react-native'
import { useDebounce } from 'use-debounce'
import { usePaginatedRepositories } from '../../hooks/useRepositories'
import { RepositoryItem } from './RepositoryItem'
import SortMenu from '../util/SortPicker'
import { Error, Loading, ItemSeparator, CloseNappula } from '../util/Utils'
import { styles } from '../../theme'
import { O, PageLength } from '../../constants'

const FilterInput = ({ filter, setFilter }) => {
  return (
    <View style={styles.buttonRow}>
      <TextInput
        autoCapitalize="none"
        style={[styles.textInput, { marginLeft: 0, marginRight: -20 }]}
        onChangeText={setFilter}
        value={filter}
        placeholder="Filter by"
      />
      <CloseNappula
        onPress={() => {
          setFilter('')
        }}
      />
    </View>
  )
}

const RepositoryPaginatedList = () => {
  const [order, setOrder] = useState(O.LATEST)
  const [filter, setFilter] = useState('')
  const [delayedFilter] = useDebounce(filter, 500)

  const { repositories, fetchMore, loading, error } = usePaginatedRepositories(
    PageLength,
    order,
    delayedFilter
  )
  if (error) return <Error>Error loading repositories: {error.message}</Error>

  const nodes = repositories ? repositories.edges.map((edge) => edge.node) : []

  return (
    <FlatList
      data={nodes}
      ListEmptyComponent={<Loading>no repositories to show</Loading>}
      ItemSeparatorComponent={<ItemSeparator />}
      ListHeaderComponent={
        <View>
          <SortMenu order={order} setOrder={setOrder} />
          <FilterInput filter={filter} setFilter={setFilter} />
        </View>
      }
      ListFooterComponent={
        <View>
          {loading ? (
            <Loading> Loading repositories..</Loading>
          ) : (
            <Loading>No more items</Loading>
          )}
        </View>
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={1}
    />
  )
}

export default RepositoryPaginatedList
