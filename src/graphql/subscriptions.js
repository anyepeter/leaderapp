/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      email
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      email
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      email
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateWeek = /* GraphQL */ `
  subscription OnCreateWeek($filter: ModelSubscriptionWeekFilterInput) {
    onCreateWeek(filter: $filter) {
      id
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWeek = /* GraphQL */ `
  subscription OnUpdateWeek($filter: ModelSubscriptionWeekFilterInput) {
    onUpdateWeek(filter: $filter) {
      id
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWeek = /* GraphQL */ `
  subscription OnDeleteWeek($filter: ModelSubscriptionWeekFilterInput) {
    onDeleteWeek(filter: $filter) {
      id
      name
      Links {
        nextToken
        __typename
      }
      Scores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateScore = /* GraphQL */ `
  subscription OnCreateScore($filter: ModelSubscriptionScoreFilterInput) {
    onCreateScore(filter: $filter) {
      id
      name
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateScore = /* GraphQL */ `
  subscription OnUpdateScore($filter: ModelSubscriptionScoreFilterInput) {
    onUpdateScore(filter: $filter) {
      id
      name
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteScore = /* GraphQL */ `
  subscription OnDeleteScore($filter: ModelSubscriptionScoreFilterInput) {
    onDeleteScore(filter: $filter) {
      id
      name
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink($filter: ModelSubscriptionLinkFilterInput) {
    onCreateLink(filter: $filter) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink($filter: ModelSubscriptionLinkFilterInput) {
    onUpdateLink(filter: $filter) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink($filter: ModelSubscriptionLinkFilterInput) {
    onDeleteLink(filter: $filter) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
