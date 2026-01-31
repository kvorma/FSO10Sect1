import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const res = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return res
}

export default useRepositories
