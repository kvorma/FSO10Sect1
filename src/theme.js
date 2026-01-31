import { StyleSheet } from 'react-native'

export const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#b8c0c9', //#586069',
    textLight: '#fff',
    error: '#d73a4a',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    panel: '#fff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    android: 'Roboto',
    ios: 'Arial',
    native: 'System',
    web: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  sizes: {
    panelHeight: 60,
    inputHeight: 40,
    gap: 10,
    radius: 5,
    border: 2,
  },
}

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.mainBackground,
    padding: 0,
  },
  itemContainer: {
    flex: 1,
    padding: theme.sizes.gap,
    backgroundColor: theme.colors.panel,
  },
  appBarContainer: {
    height: theme.sizes.inputHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
  },
  appBarAlign: {
    GapHorizontal: 10,
    alignItems: 'center',
  },
  appBarTab: {
    padding: 8,
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
  panel: {
    backgroundColor: theme.colors.panel,
    height: theme.sizes.panelHeight,
    margin: 0,
  },
  error: {
    height: theme.sizes.panelHeight - theme.sizes.inputHeight,
    marginTop: -10,
    marginBottom: 0,
    paddingLeft: 10,
    backgroundColor: theme.colors.panel,
  },
  submit: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: theme.colors.textLight,
    backgroundColor: theme.colors.primary,
    height: theme.sizes.inputHeight,
    margin: theme.sizes.gap,
    borderWidth: theme.sizes.border,
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.gap,
  },
  topRow: {
    flexDirection: 'row',
    gap: theme.sizes.gap,
    alignItems: 'flex-start',
  },
  infoColumn: {
    maxWidth: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statsItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  languageItem: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: theme.sizes.radius,
    marginTop: 5,
    marginBottom: theme.sizes.radius,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  rating: {
    width: theme.sizes.inputHeight,
    height: theme.sizes.inputHeight,
    borderWidth: theme.sizes.border,
    borderRadius: theme.sizes.inputHeight / 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheading: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  separator: {
    height: theme.sizes.gap,
  },
  buttonRow: {
    flexDirection: 'row',
    flexBasis: '100%',
    justifyContent: 'space-evenly',
  },
})
