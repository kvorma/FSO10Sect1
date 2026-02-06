import { useEffect } from 'react'
import { Loading } from '../util/Utils'
import Alert from '../util/Alert'
import { useNavigate } from 'react-router-native'
import useSignOut from '../../hooks/useSignOut'

const SignOut = () => {
  const signOut = useSignOut()
  const navigate = useNavigate()

  useEffect(() => {
    Alert.alert('Confirm', 'Do you want to sign out?', [
      {
        text: 'No',
        onPress: () => {
          navigate(-1)
        },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('logout')
  return <Loading>Signing out..</Loading>
}

export default SignOut
