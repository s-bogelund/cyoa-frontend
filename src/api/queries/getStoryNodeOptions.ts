import { gql } from '@apollo/client';

export type GetStoryNodeOptionsPayload = {
	id: string;
	storyNodeId: string;
	destinationNode: string;
	optionText: string;
};

export const GET_STORY_NODE_OPTIONS_QUERY = gql`
	query GetStoryNodeOptions($storyNodeId: UUID!) {
		storyNodeOptions(where: { storyNodeId: { eq: $storyNodeId } }) {
			id
			destinationNode
			optionText
			condition
		}
	}
`;
