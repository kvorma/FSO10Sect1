import { render, waitFor, screen, fireEvent, act } from '@testing-library/react-native'
import { SignInForm } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn()
      const username = 'kalle',
        password = 'password'
      render(<SignInForm onSubmit={onSubmit} />)

      expect(screen.getByPlaceholderText('Username')).toBeVisible()
      expect(screen.getByPlaceholderText('Password')).toBeVisible()
      expect(screen.getByText('Sign In')).toBeVisible()
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
      fireEvent.press(screen.getByText('Sign In'))

      await waitFor(() => { expect(onSubmit).toHaveBeenCalledTimes(1) })
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      })
    })
    it('tries to submit with insufficient input and receives error message', async () => {
      const onSubmit = jest.fn()
      const username = 'kalle'

      render(<SignInForm onSubmit={onSubmit} />)
      expect(screen.getByText('Sign In')).toBeVisible()

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
      fireEvent.press(screen.getByText('Sign In'))

      await waitFor(() => { expect(screen.getByText('Password is required')).toBeVisible() })
      screen.debug()
    })
  })
})
