import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql /* GraphQL */ `
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`

export const GET_REPOSITORY = gql /* GraphQL */ `
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields
    }
  }
  ${REPOSITORY_FIELDS}
`
export const GET_REVIEWS = gql /* GraphQL */ `
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      id
      reviews {
        edges {
          node {
            id
            rating
            createdAt
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const ME = gql /* GraphQL */ `
  query {
    me {
      id
      username
    }
  }
`
