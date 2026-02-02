import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import RepositoryList from './repo/RepositoryList'
import AppBar from './util/AppBar'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import SignOut from './user/SignOut'
import RepositoryView from './repo/RepositoryView'
import Review from './review/CreateReview'
import MyReviews from './review/MyReviews'
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
          <Route path="/myreviews" element={<MyReviews />} />
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
