import { gql } from '@apollo/client';

export const ADD_STORY_NODE_MUTATION = gql`
	mutation AddStoryNode($input: StoryNodeAddInput!) {
		addStoryNode(input: $input) {
			storyId
			title
			storyText
			encounterType
			isCheckpoint
		}
	}
`;
