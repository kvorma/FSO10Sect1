import { useApolloClient, useMutation } from '@apollo/client/react'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const [auth, result] = useMutation(AUTHENTICATE)
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const signIn = async (creds) => {
    const { data } = await auth({ variables: { credentials: creds } })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    return data.authenticate
  }

  return [signIn, result]
}

export default useSignIn
