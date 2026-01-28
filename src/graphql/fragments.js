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
