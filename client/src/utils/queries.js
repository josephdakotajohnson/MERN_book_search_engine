import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            name
            bookCount
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($UserId: ID!) {
        user(userId: $userId) {
            _id
            name
            bookCound
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            name
            bookCount
        }
    }
`;

