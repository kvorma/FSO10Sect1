import { useQuery } from '@apollo/client/react'
import { ME } from '../graphql/queries'

const useGetUser = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })
  return error || loading ? null : data.me
}

export default useGetUser
