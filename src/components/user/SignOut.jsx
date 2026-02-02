import { Navigate } from 'react-router-native'
import useSignOut from '../../hooks/useSignOut'
import Alert from '@blazejkustra/react-native-alert'

const SignOut = () => {
  const signOut = useSignOut()

  Alert.alert('Confirm', 'Do you want to sign out?', [
    { text: 'No', style: 'cancel' },
    {
      text: 'Yes',
      onPress: () => signOut(),
      style: 'default',
    },
  ])

  return <Navigate to="/" />
}

export default SignOut
