import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql /* GraphQL */ `
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`
export const PAGINATED_REPOSITORIES = gql /* GraphQL */ `
  query PaginatedRepositories(
    $first: Int
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
  ) {
    repositories(
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
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
  query Reviews($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      id
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`
export const PAGINATED_REVIEWS = gql /* GraphQL */ `
  query PaginatedReviews($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      fullName
      id
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`
export const ME = gql /* GraphQL */ `
  query me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`
