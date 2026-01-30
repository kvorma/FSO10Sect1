import { FlatList, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import ItemSeparator from './ItemSeparator'

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate()
  const repositoryNodes = repositories?.edges
    ? repositories.edges.map((edge) => edge.node)
    : []

  const onPress = (id) => {
    const target = `/view/${id}`
    navigate(target)
  }

  return (
    <FlatList
      data={repositoryNodes}
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
  const { repositories } = useRepositories()

  return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList
