import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'
import RepositoryView from './RepositoryView'
import Review from './Review'
import { styles } from '../theme'

const Main = () => {
  const [login, setLogin] = useState('')
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <AppBar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route
            path="/view/:repositoryId"
            element={<RepositoryView login={login} />}
          />
          <Route path="/review/:owner/:name" element={<Review />} />
          <Route path="/review" element={<Review />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Main
