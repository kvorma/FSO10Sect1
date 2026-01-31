import { View, FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import { Error, Loading, ItemSeparator } from './Utils'
import useReviews from '../hooks/useReviews'
import { styles } from '../theme'
import { formatDate } from '../utils/utils'

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.topRow}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.infoColumn}>
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text color="textSecondary">{formatDate(review.createdAt)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

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
    <FlatList
      data={nodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repo.data.repository} detailed login={login} />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  )
}

export default RepositoryView
