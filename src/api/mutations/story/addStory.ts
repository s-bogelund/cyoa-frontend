import { gql } from '@apollo/client';

export const ADD_STORY_MUTATION = gql`
	mutation AddStory($input: StoryAddInput!) {
		addStory(input: $input) {
			userId
			id
			title
			difficulty
			targetAge
			playtime
			description
			storyNodes {
				id
				title
				storyText
				encounterType
				isCheckpoint
				isRoot
			}
		}
	}
`;
