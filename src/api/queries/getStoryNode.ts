import { gql } from '@apollo/client';

export const GET_STORY_NODE_QUERY = gql`
	query GetStoryNode($id: UUID!) {
		storyNodeQuery(where: { id: { eq: $id } }) {
			id
			title
			storyText
			encounterType
			isCheckpoint
			storyId
			createdAt
			modifiedAt
			isDeleted
			storyNodeOptions {
				id
				storyNodeId
				destinationNode
				optionText
				condition
			}
		}
	}
`;
