import { Navigate } from 'react-router-native'
import Alert from '../util/Alert'
import { Error, Loading } from '../util/Utils'
import useGetUser from '../../hooks/useGetUser'
import ReviewList from './ReviewList'

const MyReviews = ({ login }) => {
  const { loading, error, data } = useGetUser(true)

  if (loading) return <Loading>Loading reviews..</Loading>
  if (error) return <Error>Error loading reviews: {error.message}</Error>

  const nodes = data.me.reviews.edges.map((edge) => edge.node)

  if (nodes.length === 0) {
    Alert.alert('My Reviews', 'You have no reviews', [
      { text: 'Ok', style: 'default' },
    ])
    return <Navigate to="/" />
  }

  return <ReviewList action="yes" nodes={nodes} listHeader={() => null} />
}

export default MyReviews
