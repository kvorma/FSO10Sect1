import { TextInput, View } from 'react-native'
import Text from './Text'
import { fErr } from '../utils/utils'
import { styles } from '../theme'

const InputLine = ({ form, bc, ph, fn, ...props }) => {
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

export default InputLine
