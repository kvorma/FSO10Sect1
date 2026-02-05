import { useState } from 'react'
import { FlatList, Pressable, TextInput, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useDebounce } from 'use-debounce'
import { useRepositories } from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import SortMenu from '../util/SortPicker'
import { Error, Loading, ItemSeparator, CloseNappula } from '../util/Utils'
import { styles } from '../../theme'
import { O } from '../../constants'

const FilterInput = ({ filter, setFilter }) => {
  return (
    <View style={styles.buttonRow}>
      <TextInput
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

export const RepositoryListContainer = ({
  nodes,
  order,
  setOrder,
  filter,
  setFilter,
}) => {
  const navigate = useNavigate()

  const onPress = (id) => {
    const target = `/view/${id}`
    navigate(target)
  }

  return (
    <FlatList
      data={nodes}
      ListEmptyComponent={<Error>no repositories to show!</Error>}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <View>
          <SortMenu order={order} setOrder={setOrder} />
          <FilterInput filter={filter} setFilter={setFilter} />
        </View>
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState(O.LATEST)
  const [filter, setFilter] = useState('')
  const [delayedFilter] = useDebounce(filter, 500)
  const { loading, error, data } = useRepositories(order, delayedFilter)

  if (loading) return <Loading>Loading repositories..</Loading>
  if (error) return <Error>Error loading repositories: {error.message}</Error>

  const nodes = data.repositories.edges.map((edge) => edge.node)

  return (
    <RepositoryListContainer
      nodes={nodes}
      order={order}
      setOrder={setOrder}
      filter={filter}
      setFilter={setFilter}
    />
  )
}

export default RepositoryList
