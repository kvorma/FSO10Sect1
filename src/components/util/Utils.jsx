import { View, TextInput, Pressable } from 'react-native'
import Text from './Text'
import { fErr } from '../../utils/utils'
import { styles } from '../../theme'

export const ItemSeparator = () => <View style={styles.separator} />

export const Subheading = ({ color, fontWeight, addStyles, children }) => {
  return (
    <Text
      color={color || 'textPrimary'}
      fontWeight={fontWeight || 'bold'}
      fontSize="subheading"
      style={addStyles ? [styles.subheading, addStyles] : styles.subheading}
    >
      {children}
    </Text>
  )
}

export const Loading = ({ children }) => {
  return (
    <Subheading color="textSecondary" addStyles={{ alignSelf: 'center' }}>
      {children}
    </Subheading>
  )
}

export const Error = ({ children }) => {
  return (
    <Subheading color="error" addStyles={{ alignSelf: 'center' }}>
      {children}
    </Subheading>
  )
}

export const InputLine = ({ form, bc, ph, fn, ...props }) => {
  return (
    <View>
      <View
        style={[
          styles.panel,
          { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <TextInput
          style={[bc, { marginLeft: 0, marginRight: -20, paddingRight: 30 }]}
          placeholder={ph}
          value={form.values[fn]}
          onChangeText={form.handleChange(fn)}
          onBlur={form.handleBlur(fn)}
          {...props}
        />
        <CloseNappula
          onPress={() => {
            form.setFieldValue(fn, '', false)
            form.setTouched({ [fn]: false }, false)
          }}
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

export const CloseNappula = ({ onPress }) => {
  return (
    <Nappula
      text="X"
      onPress={onPress}
      vstyle={{}}
      tstyle={styles.clearButton}
      accessible={false}
    />
  )
}
