import { Image, View } from 'react-native'
import { openURL } from 'expo-linking'

import Text from './Text'
import { Subheading, Nappula } from './Utils'
import { num2k } from '../utils/utils'
import { styles } from '../theme'
import { useNavigate } from 'react-router-native'

const StatsItem = ({ label, count }) => {
  return (
    <View label={label} style={styles.statsItem}>
      <Text fontWeight="bold">{num2k(count)}</Text>
      <Text>{label}</Text>
    </View>
  )
}

const RepositoryItem = ({ item, detailed, login }) => {
  const navigate = useNavigate()

  const onGitPress = (url) => {
    openURL(url)
  }

  const onReviewPress = (fullName) => {
    const [owner, name] = fullName.split('/')
    navigate(`/review/${owner}/${name}`)
  }

  const bw = login ? '50%' : '100%'

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
      <View style={styles.buttonRow}>
        {detailed && (
          <Nappula
            text="Open In GitHub"
            vstyle={{ width: bw, alignItems: 'stretch' }}
            onPress={() => onGitPress(item.url)}
          />
        )}
        {login && (
          <Nappula
            text="Review the Repository"
            vstyle={{ width: bw, alignItems: 'stretch' }}
            onPress={() => onReviewPress(item.fullName)}
          />
        )}
      </View>
    </View>
  )
}

export default RepositoryItem
