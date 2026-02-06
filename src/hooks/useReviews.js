import { useQuery } from '@apollo/client/react'
import { GET_REVIEWS, PAGINATED_REVIEWS } from '../graphql/queries'

export const useReviews = (repositoryId) => {
  const res = useQuery(GET_REVIEWS, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  return res
}

export const usePaginatedReviews = (first, repositoryId) => {
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      },
    })
  }

  const after = ''
  const { data, loading, error, fetchMore } = useQuery(PAGINATED_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { first, after, repositoryId },
  })

  return {
    reviews: data?.repository?.reviews,
    fetchMore: handleFetchMore,
    loading,
    error,
  }
}
