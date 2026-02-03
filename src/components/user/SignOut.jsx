import { useNavigate } from 'react-router-native'
import useSignOut from '../../hooks/useSignOut'
import Alert from '@blazejkustra/react-native-alert'

const SignOut = () => {
  const signOut = useSignOut()
  const navigate = useNavigate()

  Alert.alert('Confirm', 'Do you want to sign out?', [
    {
      text: 'No',
      onPress: () => navigate(-1),
      style: 'cancel',
    },
    {
      text: 'Yes',
      onPress: () => {
        signOut()
        navigate('/')
      },
      style: 'default',
    },
  ])

  return null
}

export default SignOut
