import { TextInput, Pressable, View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import Alert from '@blazejkustra/react-native-alert'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Text from './Text'
import theme from '../theme'
import { fErr } from '../utils/utils'
import useSignIn from '../hooks/useSignIn'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'column',
    backgroundColor: theme.colors.mainBackground,
  },
  panel: {
    backgroundColor: theme.colors.panel,
    height: theme.sizes.panelHeight,
    margin: 0,
  },
  textInput: {
    color: theme.colors.textPrimary,
    placeholderTextColor: theme.colors.textSecondary,
    //   borderColor: theme.colors.textPrimary,
    backgroundColor: theme.colors.panel,
    height: theme.sizes.inputHeight,
    margin: theme.sizes.gap,
    borderWidth: theme.sizes.border,
    borderRadius: theme.sizes.radius,
    paddingLeft: theme.sizes.gap,
  },
  submit: {
    textAlign: 'center',
    color: theme.colors.textLight,
    backgroundColor: theme.colors.primary,
    height: theme.sizes.inputHeight,
    margin: theme.sizes.gap,
    borderWidth: theme.sizes.border,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.gap,
  },
  error: {
    height: theme.sizes.panelHeight - theme.sizes.inputHeight,
    marginTop: -10,
    marginBottom: 0,
    paddingLeft: 10,
    backgroundColor: theme.colors.panel,
  },
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: onSubmit,
  })
  const userColor = StyleSheet.create({
    textInput: {
      borderColor: fErr(formik, 'username')
        ? theme.colors.error
        : theme.colors.textPrimary,
    },
  })
  const userStyle = StyleSheet.compose(styles.textInput, userColor.textInput)
  const pwColor = StyleSheet.create({
    textInput: {
      borderColor: fErr(formik, 'password')
        ? theme.colors.error
        : theme.colors.textPrimary,
    },
  })
  const pwStyle = StyleSheet.compose(styles.textInput, pwColor.textInput)

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <TextInput
          style={userStyle}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
        />
      </View>
      <View style={styles.error}>
        {fErr(formik, 'username') && (
          <Text color="error">{formik.errors.username}</Text>
        )}
      </View>
      <View style={styles.panel}>
        <TextInput
          style={pwStyle}
          placeholder="Password"
          value={formik.values.password}
          secureTextEntry="true"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          onSubmitEditing={formik.handleSubmit}
        />
      </View>
      <View style={styles.error}>
        {fErr(formik, 'password') && (
          <Text color="error">{formik.errors.password}</Text>
        )}
      </View>
      <View style={styles.panel}>
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.submit} fontWeight="bold">
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      Alert.alert('Sign in failed', e.message)
      console.log('Auth failed:', e.message)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
