import { gql } from '@apollo/client';

export const UPDATE_STORY_NODE_MUTATION = gql`
	mutation UpdateStoryNode($input: StoryNodeUpdateInput!) {
		updateStoryNode(input: $input) {
			id
			title
			storyText
			encounterType
			isCheckpoint
			modifiedAt
		}
	}
`;
