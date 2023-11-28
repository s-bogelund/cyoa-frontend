import { gql } from '@apollo/client';

export type UpdateStoryNodePayload = {
	id: string;
	title: string;
	storyText: string;
	encounterType: string;
	isCheckpoint: boolean;
};

export const UPDATE_STORY_NODE_MUTATION = gql`
	mutation UpdateStoryNode($input: StoryNodeUpdateInput!) {
		updateStoryNode(input: $input) {
			id
			title
			storyText
			encounterType
			isCheckpoint
		}
	}
`;
