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
export const ME = gql /* GraphQL */ `
  query {
    me {
      id
      username
    }
  }
`
