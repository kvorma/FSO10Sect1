import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'
import useSignOut from '../hooks/useSignOut'
import Alert from '@blazejkustra/react-native-alert'

const SignOut = () => {
  const signOut = useSignOut()
  const navigate = useNavigate()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => navigate(-1), [])

  Alert.alert('Confirm', 'Do you want to sign out?', [
    { text: 'No', style: 'cancel' },
    {
      text: 'Yes',
      onPress: () => signOut(),
      style: 'default',
    },
  ])

  return null
}

export default SignOut
