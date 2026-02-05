import { useState } from 'react'
import { PickerIOS } from '@react-native-picker/picker'
import { Nappula } from './Utils'
import { O } from '../../constants'
import { styles } from '../../theme'

const SortPicker = ({ order, setOrder }) => {
  return (
    <PickerIOS
      numberOfLines={3}
      itemStyle={styles.sortPickerIOS}
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) => setOrder(itemValue)}
    >
      <PickerIOS.Item label={O.LATEST} value={O.LATEST} />
      <PickerIOS.Item label={O.HIGHEST} value={O.HIGHEST} />
      <PickerIOS.Item label={O.LOWEST} value={O.LOWEST} />
    </PickerIOS>
  )
}

const SortMenu = ({ order, setOrder }) => {
  const [pickerOpen, setPickerOpen] = useState(false)

  const onPress = () => {
    setPickerOpen(true)
  }

  const onSelect = () => {
    setPickerOpen(false)
  }
  return (
    <>
      {pickerOpen ? (
        <SortPicker order={order} setOrder={setOrder} onSelect={onSelect} />
      ) : (
        <Nappula
          text={'Sorted by ' + order}
          onPress={onPress}
          vstyle={[styles.panel, styles.sortPickerIOS]}
        />
      )}
    </>
  )
}

export default SortMenu
