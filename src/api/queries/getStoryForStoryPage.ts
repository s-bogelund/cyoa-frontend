import { gql } from "@apollo/client";

import { Story } from "@/gql/graphql";

export type GetStoryForStoryPageQueryResult = {
	stories: Story[];
};

const GET_STORY_FOR_STORY_PAGE = gql`
	query GetStoryForStoryPage($idInput: UUID) {
        stories(where: { id: { eq: $idInput } }) {
            id
            title
            targetAge
            playtime
            description
            difficulty
            storyNodes {
                id
            encounterType
            }
            ratings {
                ratingValue
            }
        }
    }
`;

export default GET_STORY_FOR_STORY_PAGE;
