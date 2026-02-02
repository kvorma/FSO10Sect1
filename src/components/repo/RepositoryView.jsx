import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import { Error, Loading, ItemSeparator } from '../util/Utils'
import useReviews from '../../hooks/useReviews'
import ReviewList from '../review/ReviewList'

const RepositoryView = ({ login }) => {
  const { repositoryId } = useParams()
  const repo = useRepository(repositoryId)
  const review = useReviews(repositoryId)

  //console.log('RepositoryView:repo', repo)
  //console.log('RepositoryView:review', review)
  if (repo.loading || review.loading) return <Loading>Loading data..</Loading>
  if (repo.error)
    return <Error>Error loading repository info: {repo.error.message}</Error>
  if (review.error)
    return <Error>Error loading review info: {review.error.message}</Error>

  const nodes = review.data.repository.reviews.edges.map((edge) => edge.node)

  return (
    <ReviewList
      nodes={nodes}
      listHeader={() => (
        <>
          <RepositoryItem item={repo.data.repository} detailed login={login} />
          <ItemSeparator />
        </>
      )}
    />
  )
}

export default RepositoryView
