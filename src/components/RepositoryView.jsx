import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'

const RepositoryView = () => {
  const { repositoryId } = useParams()
  const repo = useRepository(repositoryId)
  if (!repo) return <Text>Loading..</Text>

  return <RepositoryItem item={repo.repository} singleView="yes" />
}

export default RepositoryView
