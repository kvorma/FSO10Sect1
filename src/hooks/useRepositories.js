import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return error || loading ? { edges: [] } : data
}

export default useRepositories
