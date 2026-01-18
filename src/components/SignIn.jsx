import { TextInput, Pressable, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'

import Text from './Text'
import theme from '../theme'

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })
  const styles = StyleSheet.create({
    container: {
      padding: 0,
      flexDirection: 'column',
      backgroundColor: theme.colors.mainBackground,
    },
    panel: {
      backgroundColor: theme.colors.panel,
      height: 60,
      margin: 0,
    },
    textInput: {
      color: theme.colors.textPrimary,
      placeholderTextColor: theme.colors.textSecondary,
      borderColor: theme.colors.textPrimary,
      backgroundColor: theme.colors.panel,
      height: 40,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },
    submit: {
      textAlign: 'center',
      color: theme.colors.textLight,
      backgroundColor: theme.colors.primary,
      height: 40,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      <View style={styles.panel}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={formik.values.password}
          secureTextEntry="true"
          onChangeText={formik.handleChange('password')}
          onSubmitEditing={formik.handleSubmit}
        />
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
  const onSubmit = (values) => {
    console.log(values)
  }
  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
