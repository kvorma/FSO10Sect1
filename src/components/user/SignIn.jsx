import { View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import Alert from '../util/Alert'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Loading, InputLine, Nappula } from '../util/Utils'
import { styles } from '../../theme'
import { colorBorder } from '../../utils/utils'
import useSignIn from '../../hooks/useSignIn'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

export const SignInForm = ({ onSubmit, user = '' }) => {
  const formik = useFormik({
    initialValues: {
      username: user,
      password: '',
    },
    validationSchema,
    onSubmit: onSubmit,
  })
  const userColor = colorBorder(formik, 'username')
  const pwColor = colorBorder(formik, 'password')

  return (
    <View style={styles.mainContainer}>
      <InputLine
        autoFocus={true}
        form={formik}
        bc={userColor}
        ph="Username"
        fn="username"
      />
      <InputLine
        form={formik}
        bc={pwColor}
        ph="Password"
        fn="password"
        secureTextEntry={true}
        onSubmitEditing={formik.handleSubmit}
      />
      <Nappula text="Sign In" onPress={formik.handleSubmit} />
    </View>
  )
}

const SignIn = () => {
  const [signIn, result] = useSignIn()
  const navigate = useNavigate()
  const { username } = useParams()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('/')
    } catch (err) {
      Alert.alert('Sign in failed', err.message)
      console.log('Auth failed:', username, err.message)
    }
  }
  if (result.loading) return <Loading>Signing in..</Loading>
  /* try..catch is signUp() manages error condition */

  return <SignInForm onSubmit={onSubmit} user={username} />
}

export default SignIn
