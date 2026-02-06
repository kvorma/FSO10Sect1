import { useParams } from 'react-router-native'
import { View } from 'react-native'
import { useRepository } from '../../hooks/useRepository'
import { RepositoryDisplay } from './RepositoryItem'
import { Error, Loading, ItemSeparator } from '../util/Utils'
import { usePaginatedReviews } from '../../hooks/useReviews'
import ReviewList from '../review/ReviewList'
import { PageLength } from '../../constants'

const RepositoryPaginatedView = ({ login }) => {
  const { repositoryId } = useParams()
  const repo = useRepository(repositoryId)
  const review = usePaginatedReviews(PageLength, repositoryId)

  if (repo.loading) return <Loading>Loading data..</Loading>
  if (repo.error)
    return <Error>Error loading repository info: {repo.error.message}</Error>
  if (review.error)
    return <Error>Error loading review info: {review.error.message}</Error>

  const nodes = review?.reviews?.edges
    ? review.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <ReviewList
      nodes={nodes}
      ListHeaderComponent={() => (
        <>
          <RepositoryDisplay item={repo.data.repository} login={login} />
          <ItemSeparator />
        </>
      )}
      ListFooterComponent={
        <View>
          {review.loading ? (
            <Loading> Loading repositories..</Loading>
          ) : (
            <Loading>No more reviews</Loading>
          )}
        </View>
      }
      onEndReached={review.fetchMore}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryPaginatedView
