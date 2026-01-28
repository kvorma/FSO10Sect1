import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (repositoryId) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  return error || loading ? null : data
}

export default useRepository
