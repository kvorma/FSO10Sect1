import { View } from 'react-native'
import { useNavigate } from 'react-router-native'
import Alert from '@blazejkustra/react-native-alert'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Loading, InputLine, Nappula } from '../util/Utils'
import { styles } from '../../theme'
import { colorBorder } from '../../utils/utils'
import useSignUp from '../../hooks/useSignUp'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    .required('Username (5 .. 30 chars) is required'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password (5 .. 50 chars) is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
})

export const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    onSubmit: onSubmit,
  })
  const userColor = colorBorder(formik, 'username')
  const pwColor = colorBorder(formik, 'password')
  const confColor = colorBorder(formik, 'confirm')

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
      />
      <InputLine
        form={formik}
        bc={confColor}
        ph="Confirm password"
        fn="confirm"
        secureTextEntry={true}
        onSubmitEditing={formik.handleSubmit}
      />
      <Nappula text="Sign Up" onPress={formik.handleSubmit} />
    </View>
  )
}

const SignUp = () => {
  const [signUp, result] = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const user = {
      username: values.username,
      password: values.password,
    }

    try {
      await signUp(user)
      Alert.alert(`Created user ${user.username}`)
      navigate('/signin/' + user.username)
    } catch (err) {
      Alert.alert('Sign Up failed', err.message)
      console.log('Creating user failed:', err.message)
    }
  }
  if (result.loading) return <Loading>Creating new user..</Loading>
  /* try..catch is signUp() manages error condition */

  return <SignUpForm onSubmit={onSubmit} />
}

export default SignUp
