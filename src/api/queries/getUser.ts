import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
	query GetUsers($where: UserFilterInput) {
		users(where: $where) {
			id
			firstName
			lastName
		}
	}
`;

export default GET_USERS;
