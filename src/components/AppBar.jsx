import { Pressable, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarTab: {
    paddingLeft: 10,
  },
})

const AppBarTab = ({ children }) => {
  return (
    <Text
      color="textLight"
      fontSize="subheading"
      fontWeight="bold"
      style={styles.appBarTab}
    >
      {children}
    </Text>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.container}>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        <Link to="/signin">
          <AppBarTab>Sign in</AppBarTab>
        </Link>
      </Pressable>
    </View>
  )
}

export default AppBar
