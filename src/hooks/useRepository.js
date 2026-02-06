import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORY } from '../graphql/queries'

export const useRepository = (repositoryId) => {
  const res = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  return res
}
