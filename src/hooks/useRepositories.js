import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { O } from '../constants'

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
