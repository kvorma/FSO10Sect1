import { StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import SignOut from './SignOut'
import RepositoryView from './RepositoryView'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.mainBackground,
  },
  subheading: {
    alignSelf: 'center',
  },
})

const Main = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/view/:repositoryId" element={<RepositoryView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Main
