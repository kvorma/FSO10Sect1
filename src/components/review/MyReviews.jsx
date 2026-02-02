import { Error, Loading } from '../util/Utils'
import useGetUser from '../../hooks/useGetUser'
import ReviewList from './ReviewList'

const MyReviews = ({ login }) => {
  const { loading, error, data } = useGetUser(true)

  console.log('MyReviews:', data)

  if (loading) return <Loading>Loading reviews..</Loading>
  if (error) return <Error>Error loading reviews: {error.message}</Error>

  const nodes = data.me.reviews.edges.map((edge) => edge.node)

  return <ReviewList nodes={nodes} listHeader={() => null} />
}

export default MyReviews
