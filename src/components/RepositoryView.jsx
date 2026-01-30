import { View, FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import ItemSeparator from './ItemSeparator'
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

const RepositoryView = () => {
  const { repositoryId } = useParams()
  const repoData = useRepository(repositoryId)
  const reviewData = useReviews(repositoryId)

  if (!(repoData && reviewData)) return <Text>Loading..</Text>

  const reviewNodes = reviewData?.repository?.reviews?.edges
    ? reviewData.repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repoData.repository} singleView />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  )
}

export default RepositoryView
