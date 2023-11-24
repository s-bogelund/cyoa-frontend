import { Story } from '@/gql/graphql';
import { gql } from '@apollo/client';
import { type } from 'os';

export type GetAllStoriesQueryResult = {
	stories: Story[];
};

const GET_ALL_STORIES = gql`
	query GetAllStories {
		stories {
			id
			title
			difficulty
			targetAge
			playtime
			user {
				id
				firstName
				lastName
			}
			storyNodes {
				id
				title
				storyText
			}
			ratings {
				ratingValue
			}
			playthroughs {
				id
				isOngoing
				isCompleted
			}
			createdAt
			modifiedAt
			isDeleted
		}
	}
`;

export default GET_ALL_STORIES;
