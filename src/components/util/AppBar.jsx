import { Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
import { Error, Loading } from './Utils'
import { styles } from '../../theme'
import useGetUser from '../../hooks/useGetUser'
import { useEffect } from 'react'

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

const AppBar = ({ setLogin }) => {
  const { loading, error, data } = useGetUser()

  useEffect(() => {
    setLogin(data?.me?.username ? data.me.username : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (loading) return <Loading>Checking login status..</Loading>
  if (error) return <Error>Error checking login status: {error.message}</Error>

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
        {data.me ? (
          <>
            <Link to="/review">
              <AppBarTab>Add a Review</AppBarTab>
            </Link>
            <Link to="/myreviews">
              <AppBarTab>My Reviews</AppBarTab>
            </Link>
            <Link to="/signout">
              <AppBarTab>Sign Out {data.me.username}</AppBarTab>
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
