import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'
// eslint-disable-next-line import/no-unresolved
import Constants from 'expo-constants'

const apolloUri = Constants.expoConfig.extra.Apollo_Uri

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
})

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
    cache: cache, //new InMemoryCache(),
  })
}

export default createApolloClient
