import { View, FlatList } from 'react-native'
import Alert from '../util/Alert'
import Text from '../util/Text'
import { ItemSeparator, Nappula } from '../util/Utils'
import { styles, theme } from '../../theme'
import { formatDate } from '../../utils/utils'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../../hooks/useDeleteReview'

const ReviewItem = ({ name, rating, createdAt, text }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.topRow}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {rating}
          </Text>
        </View>
        <View style={styles.infoColumn}>
          <Text fontWeight="bold">{name}</Text>
          <Text color="textSecondary">{formatDate(createdAt)}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  )
}

const ReviewList = ({ action, nodes, ...props }) => {
  const navigate = useNavigate()
  const [deleteFn] = useDeleteReview()

  const onDelete = (reviewId) => {
    Alert.alert('Confirm', 'Delete Review?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => deleteFn(reviewId),
        style: 'destructive',
      },
    ])
  }
  return (
    <FlatList
      data={nodes}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <ReviewItem
            name={item?.user?.username || item?.repository?.fullName || 'error'}
            rating={item.rating}
            createdAt={item.createdAt}
            text={item.text}
          />
          {action && (
            <View style={styles.buttonRow}>
              <Nappula
                text="View Repository"
                vstyle={{ flex: -1, width: '50%' }}
                onPress={() => navigate('/view/' + item.repositoryId)}
              />
              <Nappula
                text="Delete Review"
                vstyle={{ flex: -1, width: '50%' }}
                tstyle={[styles.submit, { backgroundColor: theme.colors.error }]}
                onPress={() => onDelete(item.id)}
              />
            </View>
          )}
        </View>
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={<ItemSeparator />}
      {...props}
    />
  )
}

export default ReviewList
