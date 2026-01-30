import { Image, View, Pressable } from 'react-native'
import { openURL } from 'expo-linking'

import Text from './Text'
import Subheading from './Subheading'
import { num2k } from '../utils/utils'
import { styles } from '../theme'

const StatsItem = ({ label, count }) => {
  return (
    <View label={label} style={styles.statsItem}>
      <Text fontWeight="bold">{num2k(count)}</Text>
      <Text>{label}</Text>
    </View>
  )
}

const RepositoryItem = ({ item, singleView }) => {
  const onPress = (url) => {
    openURL(url)
  }

  return (
    <View testID="repositoryItem" style={styles.itemContainer}>
      <View style={styles.topRow}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.infoColumn}>
          <Subheading>{item.fullName} </Subheading>
          <Text>{item.description} </Text>
          <View style={styles.languageItem}>
            <Text color="textLight">{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsRow}>
        <StatsItem label="Stars" count={item.stargazersCount} />
        <StatsItem label="Forks" count={item.forksCount} />
        <StatsItem label="Reviews" count={item.reviewCount} />
        <StatsItem label="Rating" count={item.ratingAverage} />
      </View>
      {singleView && (
        <View>
          <Pressable onPress={() => onPress(item.url)}>
            <Text style={styles.submit} fontWeight="bold">
              Open In GitHub
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default RepositoryItem
