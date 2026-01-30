import { StyleSheet } from 'react-native'
import { theme, styles } from '../theme'

export const num2k = (num) => {
  return num < 1000 ? num.toString() : Math.round(num / 100) / 10 + 'k'
}

export const fErr = (f, field) => {
  return f.touched[field] && f.errors[field]
}

export const formatDate = (DateISO) => {
  const d = new Date(DateISO)
  return d.toLocaleDateString()
}

export const colorBorder = (form, field, extra) => {
  const color = StyleSheet.create({
    textInput: {
      borderColor: fErr(form, field)
        ? theme.colors.error
        : theme.colors.textPrimary,
      ...extra,
    },
  })
  return StyleSheet.compose(styles.textInput, color.textInput)
}
