import { gql } from "@apollo/client";

import { StoryNode } from "@/gql/graphql";

export type GetNodeAndStoryForSummaryQueryResult = {
	storyNode: StoryNode;
};

const GET_NODE_AND_STORY_FOR_SUMMARY = gql`
	query GetNodeAndStoryForSummary($idInput: UUID) {
		storyNodes (where: {id: {eq: $idInput}}) {
			id
			title
			storyText
			encounterType
			story @include(if: true) {
				id
				title
				difficulty
				targetAge
			}
		}
	}
`;

export default GET_NODE_AND_STORY_FOR_SUMMARY;
