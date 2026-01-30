import { useMutation } from '@apollo/client/react'
import { ADD_USER } from '../graphql/mutations'

const useSignUp = () => {
  const [mutate, result] = useMutation(ADD_USER)

  const mutateFn = async (user) => {
    const { data } = await mutate({ variables: { user } })
    return data.createUser
  }

  return [mutateFn, result]
}

export default useSignUp
