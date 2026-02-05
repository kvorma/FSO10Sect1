import { Picker } from '@react-native-picker/picker'
import { O } from '../../constants'
import { styles } from '../../theme'

const SortMenu = ({ order, setOrder }) => {
  return (
    <Picker
      style={styles.sortPickerWeb}
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) => setOrder(itemValue)}
    >
      <Picker.Item label={'Sort by ' + O.LATEST} value={O.LATEST} />
      <Picker.Item label={'Sort by ' + O.HIGHEST} value={O.HIGHEST} />
      <Picker.Item label={'Sort by ' + O.LOWEST} value={O.LOWEST} />
    </Picker>
  )
}

export default SortMenu
