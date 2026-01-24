import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
import theme from '../theme'
import useAuthStorage from '../hooks/useAuthStorage'

const styles = StyleSheet.create({
  container: {
    height: theme.sizes.inputHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
  },
  align: {
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
  const auth = useAuthStorage()
  const signed = auth.getAccessToken() ? true : false

  return (
    <Pressable>
      <ScrollView
        horizontal
        style={styles.container}
        contentContainerStyle={styles.align}
      >
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {signed ? (
          <Link to="/signout">
            <AppBarTab>Sign Out</AppBarTab>
          </Link>
        ) : (
          <Link to="/signin">
            <AppBarTab>Sign in</AppBarTab>
          </Link>
        )}
      </ScrollView>
    </Pressable>
  )
}

export default AppBar
