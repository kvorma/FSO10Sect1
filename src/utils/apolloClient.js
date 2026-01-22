import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const createApolloClient = () => {
  const uri = `http://${process.env.EXPO_PUBLIC_IP_ADDR}:4000/graphql`
  console.log('Connecting to:', uri)
  return new ApolloClient({
    link: new HttpLink({ uri: uri }),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
