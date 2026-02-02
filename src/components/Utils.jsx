import { View, TextInput, Pressable } from 'react-native-web'
import Text from './Text'
import { fErr } from '../utils/utils'
import { styles } from '../theme'

export const ItemSeparator = () => <View style={styles.separator} />

export const Subheading = ({ color, fontWeight, children }) => {
  return (
    <Text
      color={color || 'textPrimary'}
      fontWeight={fontWeight || 'bold'}
      fontSize="subheading"
      style={styles.subheading}
    >
      {children}
    </Text>
  )
}

export const Loading = ({ children }) => {
  return <Subheading color="textSecondary">{children}</Subheading>
}

export const Error = ({ children }) => {
  return <Subheading color="error">{children}</Subheading>
}

export const InputLine = ({ form, bc, ph, fn, ...props }) => {
  return (
    <View>
      <View style={styles.panel}>
        <TextInput
          style={bc}
          placeholder={ph}
          value={form.values[fn]}
          onChangeText={form.handleChange(fn)}
          onBlur={form.handleBlur(fn)}
          {...props}
        />
      </View>
      <View style={styles.error}>
        {fErr(form, fn) && <Text color="error">{form.errors[fn]}</Text>}
      </View>
    </View>
  )
}

export const Nappula = ({
  text,
  onPress,
  vstyle = styles.panel,
  tstyle = styles.submit,
}) => {
  return (
    <Pressable style={vstyle} onPress={onPress}>
      <Text style={tstyle} fontWeight="bold">
        {text}
      </Text>
    </Pressable>
  )
}
