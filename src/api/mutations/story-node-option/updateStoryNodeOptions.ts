import { gql } from '@apollo/client';

export const UPDATE_STORY_NODE_OPTION_MUTATION = gql`
	mutation UpdateStoryNodeOption($input: StoryNodeOptionUpdateInput!) {
		updateStoryNodeOption(input: $input) {
			id
			destinationNode
			optionText
		}
	}
`;
