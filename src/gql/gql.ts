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
    "\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n": types.GetAllStoriesDocument,
    "\n\tquery GetStoryForSummary($idInput: UUID) {\n\t\tstories (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            difficulty\n            targetAge\n\t\t}\n\t}\n": types.GetStoryForSummaryDocument,
    "\n\tquery GetStoryNodeForSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            storyText\n            encounterType\n\t\t}\n\t}\n": types.GetStoryNodeForSummaryDocument,
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
export function graphql(source: "\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllStories {\n\t\tstories {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdifficulty\n\t\t\ttargetAge\n\t\t\tplaytime\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tstoryNodes {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstoryText\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t\tplaythroughs {\n\t\t\t\tid\n\t\t\t\tisOngoing\n\t\t\t\tisCompleted\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tmodifiedAt\n\t\t\tisDeleted\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetStoryForSummary($idInput: UUID) {\n\t\tstories (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            difficulty\n            targetAge\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetStoryForSummary($idInput: UUID) {\n\t\tstories (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            difficulty\n            targetAge\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetStoryNodeForSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            storyText\n            encounterType\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetStoryNodeForSummary($idInput: UUID) {\n\t\tstoryNodes (where: {id: {eq: $idInput}}) {\n\t\t\tid\n            title\n            storyText\n            encounterType\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetUsers($where: UserFilterInput) {\n\t\tusers(where: $where) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetUsers($where: UserFilterInput) {\n\t\tusers(where: $where) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;