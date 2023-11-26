import { gql } from "@apollo/client";

import { StoryNode } from "@/gql/graphql";

export type GetNodeForReaderSummaryQueryResult = {
	storyNodes: StoryNode[];
};

const GET_NODE_FOR_READER_SUMMARY = gql`
	query GetNodeForReaderSummary($idInput: UUID) {
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

export default GET_NODE_FOR_READER_SUMMARY;
