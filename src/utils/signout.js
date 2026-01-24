//mport { useApolloClient } from '@apollo/client/react'
//import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'

export const isLoggedIn = () => {
  const auth = useAuthStorage()

  return auth.getAccessToken() ? true : false
}

/*
export const isLoggedIn = () => {
  const client = useApolloClient()

  const syncQuery = async () => {
    const data = await client.query({ query: ME })
    console.log('logout:', data)
    return data
  }
  syncQuery()
}
*/
