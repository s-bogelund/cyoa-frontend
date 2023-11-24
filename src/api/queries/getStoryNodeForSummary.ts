import { Story, StoryNode } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetStoryNodeForSummaryQueryResult = {
	storyNode: StoryNode;
};

const GET_STORY_NODE_FOR_SUMMARY = gql`
	query GetStoryNodeForSummary($idInput: UUID) {
		storyNodes (where: {id: {eq: $idInput}}) {
			id
            title
            storyText
            encounterType
		}
	}
`;

export default GET_STORY_NODE_FOR_SUMMARY;
