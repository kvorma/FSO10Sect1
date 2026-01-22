//import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })
  console.log("useRepositories()")
  return loading ? [] : data
}
/*
const useRepositoriesRest = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const fetchRepositoriesRest = async () => {
    const repoUrl = `http://${process.env.EXPO_PUBLIC_IP_ADDR}:5001/api/repositories`
    setLoading(true)
    console.log('Connecting to: ', repoUrl)
    // Replace the IP address part with your own IP address!
    const response = await fetch(repoUrl)
    const json = await response.json()

    setLoading(false)
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories, loading, refetch: fetchRepositories }
}
*/
export default useRepositories
