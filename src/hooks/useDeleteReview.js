import { useMutation } from '@apollo/client/react'
import { DEL_REVIEW } from '../graphql/mutations'
import { ME } from '../graphql/queries'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DEL_REVIEW)

  const mutateFn = async (deleteReviewId) => {
    const { data } = await mutate({
      variables: { deleteReviewId },
      refetchQueries: [
        ME, // DocumentNode object parsed with gql
        'me', // Query name
      ],
    })
    return data.createReview
  }

  return [mutateFn, result]
}

export default useDeleteReview
