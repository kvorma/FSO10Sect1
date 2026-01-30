import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'

import Constants from 'expo-constants'

const apolloUri = Constants.expoConfig.extra.Apollo_Uri

const httpLink = new HttpLink({
  uri: apolloUri,
})

const createApolloClient = (authStorage) => {
  const asyncAuthLink = new SetContextLink(async (prevContext, operation) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      const h = {
        headers: {
          ...prevContext.headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      }
      //console.log('ApolloAuth:', h)
      return h
    } catch (e) {
      console.error('in AuthLink:', e)
      return {
        headers: prevContext.headers,
      }
    }
  })
  console.log('Connecting', apolloUri)
  return new ApolloClient({
    link: asyncAuthLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
