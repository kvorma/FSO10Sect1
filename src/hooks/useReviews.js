import { useQuery } from '@apollo/client/react'
import { GET_REVIEWS } from '../graphql/queries'

const useReviews = (repositoryId) => {
  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  return error || loading ? null : data
}

export default useReviews
