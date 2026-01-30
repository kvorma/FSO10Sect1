import { Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
import { styles } from '../theme'
import useGetUser from '../hooks/useGetUser'

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
  const signed = useGetUser() // === null ? false : true

  return (
    <Pressable>
      <ScrollView
        horizontal
        style={styles.appBarContainer}
        contentContainerStyle={styles.appBarAlign}
      >
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {signed ? (
          <>
            <Link to="/review">
              <AppBarTab>Submit a Review</AppBarTab>
            </Link>
            <Link to="/signout">
              <AppBarTab>Sign Out {signed.username}</AppBarTab>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">
              <AppBarTab>Sign in</AppBarTab>
            </Link>
            <Link to="/signup">
              <AppBarTab>Sign Up</AppBarTab>
            </Link>
          </>
        )}
      </ScrollView>
    </Pressable>
  )
}

export default AppBar
