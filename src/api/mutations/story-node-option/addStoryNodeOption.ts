import { gql } from '@apollo/client';

export type AddStoryNodeOptionPayload = {
	storyNodeId: string;
	destinationNode: string;
	optionText: string;
};

export const ADD_STORY_NODE_OPTION_MUTATION = gql`
	mutation AddStoryNodeOption($input: StoryNodeOptionAddInput!) {
		addStoryNodeOption(input: $input) {
			id
			storyNodeId
			destinationNode
			optionText
		}
	}
`;
