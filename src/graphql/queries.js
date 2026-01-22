import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql /* GraphQL */ `
  query {
    repositories {
      edges {
        node {
          forksCount
          fullName
          id
          language
          description
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`

// other queries...
