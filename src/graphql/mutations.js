import { gql } from '@apollo/client'

export const AUTHENTICATE = gql /* GraphQL */ `
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
export const ADD_USER = gql /* GraphQL */ `
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`

export const ADD_REVIEW = gql /* GraphQL */ `
  mutation review($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`
export const DEL_REVIEW = gql /* GraphQL */ `
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`
