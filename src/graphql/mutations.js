import { gql } from '@apollo/client'

export const AUTHENTICATE = gql /* GraphQL */ `
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
