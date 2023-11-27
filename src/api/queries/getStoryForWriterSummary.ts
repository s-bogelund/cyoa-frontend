import { Story } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetStoryForWriterSummaryQueryResult = {
	stories: Story[];
};

const GET_STORY_FOR_WRITER_SUMMARY = gql`
	query GetStoryForWriterSummary($idInput: UUID) {
        stories(where: { id: { eq: $idInput } }) {
            id
            title
            difficulty
            targetAge
            storyNodes {
                id
            }
        }
    }
`;

export default GET_STORY_FOR_WRITER_SUMMARY;
