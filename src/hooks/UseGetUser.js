import { useQuery } from '@apollo/client/react'
import { ME } from '../graphql/queries'

const useGetUser = () => {
  const res = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })
  return res
}

export default useGetUser
