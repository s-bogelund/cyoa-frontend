import { Story } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetStoryForSummaryQueryResult = {
	story: Story;
};

const GET_STORY_FOR_SUMMARY = gql`
	query GetStoryForSummary($idInput: UUID) {
		stories (where: {id: {eq: $idInput}}) {
			id
            title
            difficulty
            targetAge
		}
	}
`;

export default GET_STORY_FOR_SUMMARY;
