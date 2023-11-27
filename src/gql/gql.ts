/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetNodeForReaderSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstoryText\n\t\t\tencounterType\n\t\t\tstory @include(if: true) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdifficulty\n\t\t\t\ttargetAge\n\t\t\t}\n\t\t}\n\t}\n": types.GetNodeForReaderSummaryDocument,
    "\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n": types.GetAllStoriesDocument,
    "\n\tquery GetStoryForStoryPage($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            targetAge\n            playtime\n            description\n            difficulty\n            storyNodes {\n                id\n            encounterType\n            }\n            ratings {\n                ratingValue\n            }\n        }\n    }\n": types.GetStoryForStoryPageDocument,
    "\n\tquery GetStoryForWriterSummary($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            difficulty\n            targetAge\n            storyNodes {\n                id\n            }\n        }\n    }\n": types.GetStoryForWriterSummaryDocument,
    "\n\tquery GetStoryNodeForPlayNode($idInput: UUID) {\n        storyNodes(where: { id: { eq: $idInput } }) {\n            id\n            title\n            storyText\n            storyNodeOptions {\n                id\n                storyNodeId\n                destinationNode\n                optionText\n            }\n        }\n    }\n": types.GetStoryNodeForPlayNodeDocument,
    "\n\tquery GetUsers($where: UserFilterInput) {\n\t\tusers(where: $where) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetNodeForReaderSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstoryText\n\t\t\tencounterType\n\t\t\tstory @include(if: true) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdifficulty\n\t\t\t\ttargetAge\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetNodeForReaderSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstoryText\n\t\t\tencounterType\n\t\t\tstory @include(if: true) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdifficulty\n\t\t\t\ttargetAge\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetStoryForStoryPage($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            targetAge\n            playtime\n            description\n            difficulty\n            storyNodes {\n                id\n            encounterType\n            }\n            ratings {\n                ratingValue\n            }\n        }\n    }\n"): (typeof documents)["\n\tquery GetStoryForStoryPage($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            targetAge\n            playtime\n            description\n            difficulty\n            storyNodes {\n                id\n            encounterType\n            }\n            ratings {\n                ratingValue\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetStoryForWriterSummary($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            difficulty\n            targetAge\n            storyNodes {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n\tquery GetStoryForWriterSummary($idInput: UUID) {\n        stories(where: { id: { eq: $idInput } }) {\n            id\n            title\n            difficulty\n            targetAge\n            storyNodes {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetStoryNodeForPlayNode($idInput: UUID) {\n        storyNodes(where: { id: { eq: $idInput } }) {\n            id\n            title\n            storyText\n            storyNodeOptions {\n                id\n                storyNodeId\n                destinationNode\n                optionText\n            }\n        }\n    }\n"): (typeof documents)["\n\tquery GetStoryNodeForPlayNode($idInput: UUID) {\n        storyNodes(where: { id: { eq: $idInput } }) {\n            id\n            title\n            storyText\n            storyNodeOptions {\n                id\n                storyNodeId\n                destinationNode\n                optionText\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetUsers($where: UserFilterInput) {\n\t\tusers(where: $where) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetUsers($where: UserFilterInput) {\n\t\tusers(where: $where) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;