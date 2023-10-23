/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWeek = /* GraphQL */ `
  mutation CreateWeek(
    $input: CreateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    createWeek(input: $input, condition: $condition) {
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
export const updateWeek = /* GraphQL */ `
  mutation UpdateWeek(
    $input: UpdateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    updateWeek(input: $input, condition: $condition) {
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
export const deleteWeek = /* GraphQL */ `
  mutation DeleteWeek(
    $input: DeleteWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    deleteWeek(input: $input, condition: $condition) {
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
export const createScore = /* GraphQL */ `
  mutation CreateScore(
    $input: CreateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    createScore(input: $input, condition: $condition) {
      id
      name
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateScore = /* GraphQL */ `
  mutation UpdateScore(
    $input: UpdateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    updateScore(input: $input, condition: $condition) {
      id
      name
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteScore = /* GraphQL */ `
  mutation DeleteScore(
    $input: DeleteScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    deleteScore(input: $input, condition: $condition) {
      id
      name
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
      id
      hashnode
      linkedin
      youtube
      github
      weekID
      createdAt
      updatedAt
      __typename
    }
  }
`;
