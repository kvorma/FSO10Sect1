import { useMutation } from '@apollo/client/react'
import { ADD_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW)

  const mutateFn = async (review) => {
    const { data } = await mutate({ variables: { review } })
    return data.createReview
  }

  return [mutateFn, result]
}

export default useCreateReview
