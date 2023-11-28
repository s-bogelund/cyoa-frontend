import { User } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetUserInfoForDashboardQueryResult = {
	users: User[];
};

const GET_USER_INFO_FOR_DASHBOARD = gql`
	query GetUserInfoForDashboard($idInput: UUID) {
        users (where: {id: {eq: $idInput}}) {
            id
            firstName
            stories {
                id
                modifiedAt
                storyNodes {
                    id
                }
            }
            playthroughs {
                id
                currentNode
                modifiedAt
            visitedStoryNodes {
                id
            }
            }
        }
    }
`;

export default GET_USER_INFO_FOR_DASHBOARD;
