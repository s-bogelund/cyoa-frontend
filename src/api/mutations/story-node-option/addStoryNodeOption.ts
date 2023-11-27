import { gql } from '@apollo/client';

export const ADD_STORY_NODE_OPTION_MUTATION = gql`
	mutation AddStoryNodeOption($input: StoryNodeOptionAddInput!) {
		addStoryNodeOption(input: $input) {
			id
			storyNodeId
			destinationNode
			optionText
			condition
			createdAt
			modifiedAt
			isDeleted
		}
	}
`;
