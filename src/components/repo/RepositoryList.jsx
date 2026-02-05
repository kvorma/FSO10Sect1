import { useState, Component } from 'react'
import { FlatList, TextInput, View } from 'react-native'
import { useDebounce } from 'use-debounce'
import { useRepositories } from '../../hooks/useRepositories'
import { RepositoryItem } from './RepositoryItem'
import SortMenu from '../util/SortPicker'
import { Error, Loading, ItemSeparator, CloseNappula } from '../util/Utils'
import { styles } from '../../theme'
import { O } from '../../constants'

const FilterInput = ({ filter, setFilter }) => {
  return (
    <View style={styles.buttonRow}>
      <TextInput
        autoFocus
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

class RepositoryListContainer extends Component {
  renderHeader = () => {
    const props = this.props
    return (
      <View>
        <SortMenu order={props.order} setOrder={props.setOrder} />
        <FilterInput filter={props.filter} setFilter={props.setFilter} />
      </View>
    )
  }

  render() {
    console.log(this.props)
    return (
      <FlatList
        data={this.props.nodes}
        ListEmptyComponent={<Error> no repositories to show!</Error>}
        ItemSeparatorComponent={<ItemSeparator />}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    )
  }
}
/*
const RepositoryListContainer = ({ nodes, order, setOrder, filter, setFilter }) => {
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
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  )
}
*/
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
