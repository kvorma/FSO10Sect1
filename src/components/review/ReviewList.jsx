import { View, FlatList } from 'react-native'
import Text from '../util/Text'
import { ItemSeparator } from '../util/Utils'
import { styles } from '../../theme'
import { formatDate } from '../../utils/utils'

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

const ReviewList = ({ nodes, listHeader }) => {
  return (
    <FlatList
      data={nodes}
      renderItem={({ item }) => (
        <ReviewItem
          name={item?.user?.username || item?.repository?.fullName || 'error'}
          rating={item.rating}
          createdAt={item.createdAt}
          text={item.text}
        />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={listHeader}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  )
}

export default ReviewList
