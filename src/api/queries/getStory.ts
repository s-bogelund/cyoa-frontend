import { gql, useQuery } from '@apollo/client';

export const GET_STORY_QUERY = gql`
	query GetStory($id: UUID!) {
		storyQuery(where: { id: { eq: $id } }) {
			userId
			title
			difficulty
			targetAge
			playtime
			description
			user {
				firstName
				lastName
			}
			storyNodes {
				id
				title
				storyText
				encounterType
				isCheckpoint
				storyNodeOptions {
					id
					destinationNode
					optionText
				}
			}
		}
	}
`;
