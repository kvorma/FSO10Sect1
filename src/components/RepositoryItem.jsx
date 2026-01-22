import { Image, View, StyleSheet } from 'react-native'
import Text from './Text'
import Subheading from './Subheading'
import { num2k } from '../utils/utils'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.sizes.gap,
    backgroundColor: theme.colors.panel,
  },
  topRow: {
    flexDirection: 'row',
    gap: theme.sizes.gap,
  },
  infoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statsItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  languageItem: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: theme.sizes.radius,
    marginTop: 5,
    marginBottom: theme.sizes.radius,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})

const StatsItem = ({ label, count }) => {
  return (
    <View style={styles.statsItem}>
      <Text fontWeight="bold">{num2k(count)}</Text>
      <Text>{label}</Text>
    </View>
  )
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default RepositoryItem
