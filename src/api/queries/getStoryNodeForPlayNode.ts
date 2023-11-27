import { gql } from "@apollo/client";

import { StoryNode } from "@/gql/graphql";

export type GetStoryNodeForPlayNodeQueryResult = {
	storyNodes: StoryNode[];
};

const GET_STORY_NODE_FOR_PLAY_NODE = gql`
	query GetStoryNodeForPlayNode($idInput: UUID) {
        storyNodes(where: { id: { eq: $idInput } }) {
            id
            title
            storyText
            storyNodeOptions {
                id
                storyNodeId
                destinationNode
                optionText
            }
        }
    }
`;

export default GET_STORY_NODE_FOR_PLAY_NODE;
