import { gql } from '@apollo/client';

export const UPDATE_STORY_MUTATION = gql`
	mutation UpdateStory($input: StoryUpdateInput!) {
		updateStory(input: $input) {
			id
			title
			difficulty
			targetAge
			playtime
			description
		}
	}
`;
