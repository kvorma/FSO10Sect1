import { gql } from '@apollo/client'

export const REPOSITORY_FIELDS = gql /* GraphQL */ `
  fragment RepositoryFields on Repository {
    forksCount
    fullName
    id
    language
    description
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
    url
  }
`
export const REVIEW_FIELDS = gql /* GraphQL */ `
  fragment ReviewFields on Review {
    id
    rating
    createdAt
    text
    repositoryId
    user {
      id
      username
    }
  }
`
