import { gql } from '@apollo/client';

const ALL_USER = gql`
query Items {
  getAllUsers {
    items {
      closedAt
      confirmationCode
      email
      createdAt
      id
      firstname
      lastname
      instagram
      patronymic
      phone
      updatedAt
      username
    }
    totalCount
  }
}
`;

export default ALL_USER;

