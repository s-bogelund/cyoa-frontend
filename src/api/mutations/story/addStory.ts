import { gql } from '@apollo/client';

export const ADD_STORY_MUTATION = gql`
	mutation AddStory($input: StoryAddInput!) {
		addStory(input: $input) {
			id
			title
			difficulty
			targetAge
			playtime
			description
			userId
			createdAt
			modifiedAt
			isDeleted
		}
	}
`;
