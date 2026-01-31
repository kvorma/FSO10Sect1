import { FlatList, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import { Error, Loading, ItemSeparator } from './Utils'

export const RepositoryListContainer = ({ nodes }) => {
  const navigate = useNavigate()

  const onPress = (id) => {
    const target = `/view/${id}`
    navigate(target)
  }

  return (
    <FlatList
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
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
  const { loading, error, data } = useRepositories()

  if (loading) return <Loading>Loading repositories..</Loading>
  if (error) return <Error>Error loading repositories: {error.message}</Error>

  const nodes = data.repositories.edges.map((edge) => edge.node)

  return <RepositoryListContainer nodes={nodes} />
}

export default RepositoryList
