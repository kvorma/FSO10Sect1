import { useQuery } from '@apollo/client/react'
import { ME } from '../graphql/queries'

const useGetUser = (includeReviews = false) => {
  const res = useQuery(ME, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  })
  return res
}

export default useGetUser
