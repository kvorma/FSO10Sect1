import { useState } from 'react'
import { FlatList, Pressable, TextInput, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'
import { useDebounce } from 'use-debounce'
import { O, useRepositories } from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import { Error, Loading, ItemSeparator, CloseNappula } from '../util/Utils'
import { styles } from '../../theme'

const FilterInput = ({ filter, setFilter }) => {
  return (
    <View style={styles.buttonRow}>
      <TextInput
        style={[styles.textInput, { marginLeft: 0, marginRight: -20 }]}
        onChangeText={setFilter}
        value={filter}
        placeholder="Filter by"
        autoFocus="true"
      />
      <CloseNappula
        onPress={() => {
          setFilter('')
        }}
      />
    </View>
  )
}

const SortMenu = ({ order, setOrder }) => {
  return (
    <Picker
      style={styles.sortPicker}
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) => setOrder(itemValue)}
    >
      <Picker.Item label="Sort by Latest Repositories" value={O.LATEST} />
      <Picker.Item label="Sort by Highest rated Repositories" value={O.HIGHEST} />
      <Picker.Item label="Sort by Lowest Rated Repositories" value={O.LOWEST} />
    </Picker>
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
        <>
          <SortMenu order={order} setOrder={setOrder} />
          <FilterInput filter={filter} setFilter={setFilter} />
        </>
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
