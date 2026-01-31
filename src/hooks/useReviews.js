import { useQuery } from '@apollo/client/react'
import { GET_REVIEWS } from '../graphql/queries'

const useReviews = (repositoryId) => {
  const res = useQuery(GET_REVIEWS, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  return res
}

export default useReviews
