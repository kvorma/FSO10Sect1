import { render, within, screen } from '@testing-library/react-native'
import { RepositoryListContainer } from '../../components/RepositoryList'
import { num2k } from '../../utils/utils'

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
}

const testPair = (field, d0, d1) => {
  r0 = repositories.edges[0].node[field]
  r1 = repositories.edges[1].node[field]
  const v0 = typeof r0 === 'number' ? num2k(r0) : r0
  const v1 = typeof r1 === 'number' ? num2k(r1) : r1

  expect(within(d0).getByText(v0)).toBeVisible()
  expect(within(d1).getByText(v1)).toBeVisible()
}

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      render(<RepositoryListContainer repositories={repositories} />)

      const repositoryItems = screen.getAllByTestId('repositoryItem')
      const [f, s] = repositoryItems

      expect(f && s).toBeVisible()
      testPair('fullName', f, s)
      testPair('description', f, s)
      testPair('language', f, s)
      testPair('stargazersCount', f, s)
      testPair('forksCount', f, s)
      testPair('ratingAverage', f, s)
      testPair('reviewCount', f, s)
    })
  })
})
