import { StoryNode } from "@/gql/graphql";
import { gql } from "@apollo/client";

export type GetStartNodeOfStoryQueryResult = {
	storyNodes: StoryNode[];
};

const GET_START_NODE_OF_STORY = gql`
	query GetStartNodeOfStory($idInput: UUID) {
        storyNodes (where: {and: [
            {storyId: {eq: $idInput}},
            {isRootNode: {eq: true}}
        ]}) {
            id
        }
    }
`;

export default GET_START_NODE_OF_STORY;
