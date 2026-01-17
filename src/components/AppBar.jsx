import { Alert, Pressable, View, StyleSheet } from 'react-native'
// eslint-disable-next-line import/no-unresolved
import Constants from 'expo-constants'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 60,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})

const AppBarTab = ({ children }) => {
  return (
    <Text color="textLight" fontSize="subheading" fontWeight="bold">
      {children}
    </Text>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert('Oi!')}>
        <AppBarTab>Repositories</AppBarTab>
      </Pressable>
    </View>
  )
}

export default AppBar
