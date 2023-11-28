import { Story } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetStoryForSummaryPageQueryResult = {
	stories: Story[];
};

const GET_STORY_FOR_SUMMARY_PAGE = gql`
	query GetStoryForSummaryPage($idInput: UUID) {
        stories(where: { id: { eq: $idInput } }) {
            id
            title
            description
        }
    }
`;

export default GET_STORY_FOR_SUMMARY_PAGE;
