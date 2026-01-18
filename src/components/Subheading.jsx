import Text from './Text'

const Subheading = ({ children }) => {
  return (
    <Text
      color="textPrimary"
      fontWeight="bold"
      fontSize="subheading"
      style={{ paddingBottom: 10 }}
    >
      {children}
    </Text>
  )
}

export default Subheading
