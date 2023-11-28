import { gql } from '@apollo/client';

export type AddStoryNodePayload = {
	storyId: string;
	title: string;
	storyText: string;
	encounterType: string;
	isCheckpoint: boolean;
};

export const ADD_STORY_NODE_MUTATION = gql`
	mutation AddStoryNode($input: StoryNodeAddInput!) {
		addStoryNode(input: $input) {
			storyId
			id
			title
			storyText
			encounterType
			isCheckpoint
		}
	}
`;
