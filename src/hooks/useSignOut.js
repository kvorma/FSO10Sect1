import { useApolloClient } from '@apollo/client/react'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignOut = () => {
  const auth = useAuthStorage()
  const client = useApolloClient()

  const signOut = async () => {
    await auth.removeAccessToken()
    await client.resetStore()
  }

  return signOut
}

export default useSignOut
