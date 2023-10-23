export const listWeeksScores = /* GraphQL */ `
  query listWeeksScores(
    $filter: ModelWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeksScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      scores {
        id
        name
        weekID
        createdAt
        updatedAt
        __typename
      }
      links {
        id
        hashnode
        linkedin
        github
        youtube
        createdAt
        weekID
        __typename
        updatedAt
      }
      nextToken
      __typename
    }
  }
`;