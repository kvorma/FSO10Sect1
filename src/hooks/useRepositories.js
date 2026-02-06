import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES, PAGINATED_REPOSITORIES } from '../graphql/queries'
import { O } from '../constants'

export const usePaginatedRepositories = (first, order, searchKeyword = '') => {
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
      },
    })
  }

  const after = ''
  let orderBy = 'CREATED_AT'
  let orderDirection = 'DESC'
  switch (order) {
    case O.HIGHEST:
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'DESC'
      break
    case O.LOWEST:
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'ASC'
      break
  }

  const { data, loading, error, fetchMore } = useQuery(PAGINATED_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { first, after, orderBy, orderDirection, searchKeyword },
  })

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    error,
  }
}

export const useRepositories = (order, searchKeyword = '') => {
  let orderBy = 'CREATED_AT'
  let orderDirection = 'DESC'
  switch (order) {
    case O.HIGHEST:
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'DESC'
      break
    case O.LOWEST:
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'ASC'
      break
  }
  const res = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  })

  return res
}
