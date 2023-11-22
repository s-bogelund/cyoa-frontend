/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
	DateTime: { input: any; output: any };
	UUID: { input: any; output: any };
};

export type BooleanOperationFilterInput = {
	eq?: InputMaybe<Scalars['Boolean']['input']>;
	neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CombatData = {
	__typename?: 'CombatData';
	createdAt: Scalars['DateTime']['output'];
	diceType: Scalars['Int']['output'];
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	isDiceRollRequired: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	storyNode?: Maybe<StoryNode>;
	storyNodeId: Scalars['UUID']['output'];
};

export type CombatDataAddInput = {
	diceType: Scalars['Int']['input'];
	isDiceRollRequired: Scalars['Boolean']['input'];
	storyNodeId: Scalars['UUID']['input'];
};

export type CombatDataDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type CombatDataFilterInput = {
	and?: InputMaybe<Array<CombatDataFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	diceType?: InputMaybe<IntOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	isDiceRollRequired?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<CombatDataFilterInput>>;
	storyNode?: InputMaybe<StoryNodeFilterInput>;
	storyNodeId?: InputMaybe<UuidOperationFilterInput>;
};

export type CombatDataUpdateInput = {
	diceType?: InputMaybe<Scalars['Int']['input']>;
	id: Scalars['UUID']['input'];
	isDiceRollRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateTimeOperationFilterInput = {
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	neq?: InputMaybe<Scalars['DateTime']['input']>;
	ngt?: InputMaybe<Scalars['DateTime']['input']>;
	ngte?: InputMaybe<Scalars['DateTime']['input']>;
	nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	nlt?: InputMaybe<Scalars['DateTime']['input']>;
	nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FloatOperationFilterInput = {
	eq?: InputMaybe<Scalars['Float']['input']>;
	gt?: InputMaybe<Scalars['Float']['input']>;
	gte?: InputMaybe<Scalars['Float']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	lt?: InputMaybe<Scalars['Float']['input']>;
	lte?: InputMaybe<Scalars['Float']['input']>;
	neq?: InputMaybe<Scalars['Float']['input']>;
	ngt?: InputMaybe<Scalars['Float']['input']>;
	ngte?: InputMaybe<Scalars['Float']['input']>;
	nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	nlt?: InputMaybe<Scalars['Float']['input']>;
	nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type IntOperationFilterInput = {
	eq?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	neq?: InputMaybe<Scalars['Int']['input']>;
	ngt?: InputMaybe<Scalars['Int']['input']>;
	ngte?: InputMaybe<Scalars['Int']['input']>;
	nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	nlt?: InputMaybe<Scalars['Int']['input']>;
	nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfCombatDataFilterInput = {
	all?: InputMaybe<CombatDataFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<CombatDataFilterInput>;
	some?: InputMaybe<CombatDataFilterInput>;
};

export type ListFilterInputTypeOfPlaythroughFilterInput = {
	all?: InputMaybe<PlaythroughFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<PlaythroughFilterInput>;
	some?: InputMaybe<PlaythroughFilterInput>;
};

export type ListFilterInputTypeOfRatingFilterInput = {
	all?: InputMaybe<RatingFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<RatingFilterInput>;
	some?: InputMaybe<RatingFilterInput>;
};

export type ListFilterInputTypeOfStoryFilterInput = {
	all?: InputMaybe<StoryFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<StoryFilterInput>;
	some?: InputMaybe<StoryFilterInput>;
};

export type ListFilterInputTypeOfStoryNodeDeathStatisticFilterInput = {
	all?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
	some?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
};

export type ListFilterInputTypeOfStoryNodeFilterInput = {
	all?: InputMaybe<StoryNodeFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<StoryNodeFilterInput>;
	some?: InputMaybe<StoryNodeFilterInput>;
};

export type ListFilterInputTypeOfStoryNodeOptionFilterInput = {
	all?: InputMaybe<StoryNodeOptionFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<StoryNodeOptionFilterInput>;
	some?: InputMaybe<StoryNodeOptionFilterInput>;
};

export type ListFilterInputTypeOfVisitedStoryNodeFilterInput = {
	all?: InputMaybe<VisitedStoryNodeFilterInput>;
	any?: InputMaybe<Scalars['Boolean']['input']>;
	none?: InputMaybe<VisitedStoryNodeFilterInput>;
	some?: InputMaybe<VisitedStoryNodeFilterInput>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addCombatData: CombatData;
	addPlaythrough: Playthrough;
	addRating: Rating;
	addStory: Story;
	addStoryNode: StoryNode;
	addStoryNodeDeathStatistic: StoryNodeDeathStatistic;
	addStoryNodeOption: StoryNodeOption;
	addUser: User;
	deleteOrRestoreCombatData: CombatData;
	deleteOrRestorePlaythrough: Playthrough;
	deleteOrRestoreRating: Rating;
	deleteOrRestoreStory: StoryNode;
	deleteOrRestoreStoryNodeDeathStatistic: StoryNodeDeathStatistic;
	deleteOrRestoreStoryNodeOption: StoryNodeOption;
	deleteOrRestoreUser: User;
	updateCombatData: CombatData;
	updatePlaythrough: Playthrough;
	updateRating: Rating;
	updateStory: Story;
	updateStoryNode: StoryNode;
	updateStoryNodeDeathStatistic: StoryNodeDeathStatistic;
	updateStoryNodeOption: StoryNodeOption;
	updateUser: User;
};

export type MutationAddCombatDataArgs = {
	input: CombatDataAddInput;
};

export type MutationAddPlaythroughArgs = {
	input: PlaythroughAddInput;
};

export type MutationAddRatingArgs = {
	input: RatingAddInput;
};

export type MutationAddStoryArgs = {
	input: StoryAddInput;
};

export type MutationAddStoryNodeArgs = {
	input: StoryNodeAddInput;
};

export type MutationAddStoryNodeDeathStatisticArgs = {
	input: StoryNodeDeathStatisticAddInput;
};

export type MutationAddStoryNodeOptionArgs = {
	input: StoryNodeOptionAddInput;
};

export type MutationAddUserArgs = {
	input: UserAddInput;
};

export type MutationDeleteOrRestoreCombatDataArgs = {
	input: CombatDataDeleteOrRestoreInput;
};

export type MutationDeleteOrRestorePlaythroughArgs = {
	input: PlaythroughDeleteOrRestoreInput;
};

export type MutationDeleteOrRestoreRatingArgs = {
	input: RatingDeleteOrRestoreInput;
};

export type MutationDeleteOrRestoreStoryArgs = {
	input: StoryNodeDeleteOrRestoreInput;
};

export type MutationDeleteOrRestoreStoryNodeDeathStatisticArgs = {
	input: StoryNodeDeathStatisticDeleteOrRestoreInput;
};

export type MutationDeleteOrRestoreStoryNodeOptionArgs = {
	input: StoryNodeOptionDeleteOrRestoreInput;
};

export type MutationDeleteOrRestoreUserArgs = {
	input: UserDeleteOrRestoreInput;
};

export type MutationUpdateCombatDataArgs = {
	input: CombatDataUpdateInput;
};

export type MutationUpdatePlaythroughArgs = {
	input: PlaythroughUpdateInput;
};

export type MutationUpdateRatingArgs = {
	input: RatingUpdateInput;
};

export type MutationUpdateStoryArgs = {
	input: StoryUpdateInput;
};

export type MutationUpdateStoryNodeArgs = {
	input: StoryNodeUpdateInput;
};

export type MutationUpdateStoryNodeDeathStatisticArgs = {
	input: StoryNodeDeathStatisticUpdateInput;
};

export type MutationUpdateStoryNodeOptionArgs = {
	input: StoryNodeOptionUpdateInput;
};

export type MutationUpdateUserArgs = {
	input: UserUpdateInput;
};

export type Playthrough = {
	__typename?: 'Playthrough';
	createdAt: Scalars['DateTime']['output'];
	currentNode: Scalars['UUID']['output'];
	id: Scalars['UUID']['output'];
	isCompleted: Scalars['Boolean']['output'];
	isDeleted: Scalars['Boolean']['output'];
	isOngoing: Scalars['Boolean']['output'];
	isPlayerDead: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	story?: Maybe<Story>;
	storyId: Scalars['UUID']['output'];
	user?: Maybe<User>;
	userId: Scalars['UUID']['output'];
	visitedStoryNodes?: Maybe<Array<VisitedStoryNode>>;
};

export type PlaythroughAddInput = {
	currentNode: Scalars['UUID']['input'];
	isCompleted: Scalars['Boolean']['input'];
	isOngoing: Scalars['Boolean']['input'];
	isPlayerDead: Scalars['Boolean']['input'];
	storyId: Scalars['UUID']['input'];
	userId: Scalars['UUID']['input'];
};

export type PlaythroughDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type PlaythroughFilterInput = {
	and?: InputMaybe<Array<PlaythroughFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	currentNode?: InputMaybe<UuidOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isCompleted?: InputMaybe<BooleanOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	isOngoing?: InputMaybe<BooleanOperationFilterInput>;
	isPlayerDead?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<PlaythroughFilterInput>>;
	story?: InputMaybe<StoryFilterInput>;
	storyId?: InputMaybe<UuidOperationFilterInput>;
	user?: InputMaybe<UserFilterInput>;
	userId?: InputMaybe<UuidOperationFilterInput>;
	visitedStoryNodes?: InputMaybe<ListFilterInputTypeOfVisitedStoryNodeFilterInput>;
};

export type PlaythroughUpdateInput = {
	currentNode?: InputMaybe<Scalars['UUID']['input']>;
	id: Scalars['UUID']['input'];
	isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
	isOngoing?: InputMaybe<Scalars['Boolean']['input']>;
	isPlayerDead?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
	__typename?: 'Query';
	combatDataQuery?: Maybe<CombatData>;
	combatDatas: Array<CombatData>;
	playthroughQuery?: Maybe<Playthrough>;
	playthroughs: Array<Playthrough>;
	ratingQuery?: Maybe<Rating>;
	ratings: Array<Rating>;
	stories: Array<Story>;
	storyNodeDeathStatisticQuery?: Maybe<StoryNodeDeathStatistic>;
	storyNodeDeathStatistics: Array<StoryNodeDeathStatistic>;
	storyNodeOptionQuery?: Maybe<StoryNodeOption>;
	storyNodeOptions: Array<StoryNodeOption>;
	storyNodeQuery?: Maybe<StoryNode>;
	storyNodes: Array<StoryNode>;
	storyQuery?: Maybe<Story>;
	userQuery?: Maybe<User>;
	users: Array<User>;
	visitedStoryNodeQuery?: Maybe<VisitedStoryNode>;
	visitedStoryNodes: Array<VisitedStoryNode>;
};

export type QueryCombatDataQueryArgs = {
	where?: InputMaybe<CombatDataFilterInput>;
};

export type QueryCombatDatasArgs = {
	where?: InputMaybe<CombatDataFilterInput>;
};

export type QueryPlaythroughQueryArgs = {
	where?: InputMaybe<PlaythroughFilterInput>;
};

export type QueryPlaythroughsArgs = {
	where?: InputMaybe<PlaythroughFilterInput>;
};

export type QueryRatingQueryArgs = {
	where?: InputMaybe<RatingFilterInput>;
};

export type QueryRatingsArgs = {
	where?: InputMaybe<RatingFilterInput>;
};

export type QueryStoriesArgs = {
	where?: InputMaybe<StoryFilterInput>;
};

export type QueryStoryNodeDeathStatisticQueryArgs = {
	where?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
};

export type QueryStoryNodeDeathStatisticsArgs = {
	where?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
};

export type QueryStoryNodeOptionQueryArgs = {
	where?: InputMaybe<StoryNodeOptionFilterInput>;
};

export type QueryStoryNodeOptionsArgs = {
	where?: InputMaybe<StoryNodeOptionFilterInput>;
};

export type QueryStoryNodeQueryArgs = {
	where?: InputMaybe<StoryNodeFilterInput>;
};

export type QueryStoryNodesArgs = {
	where?: InputMaybe<StoryNodeFilterInput>;
};

export type QueryStoryQueryArgs = {
	where?: InputMaybe<StoryFilterInput>;
};

export type QueryUserQueryArgs = {
	where?: InputMaybe<UserFilterInput>;
};

export type QueryUsersArgs = {
	where?: InputMaybe<UserFilterInput>;
};

export type QueryVisitedStoryNodeQueryArgs = {
	where?: InputMaybe<VisitedStoryNodeFilterInput>;
};

export type QueryVisitedStoryNodesArgs = {
	where?: InputMaybe<VisitedStoryNodeFilterInput>;
};

export type Rating = {
	__typename?: 'Rating';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	ratingValue: Scalars['Float']['output'];
	story?: Maybe<Story>;
	storyId: Scalars['UUID']['output'];
	user?: Maybe<User>;
	userId: Scalars['UUID']['output'];
};

export type RatingAddInput = {
	ratingValue: Scalars['Float']['input'];
	storyId: Scalars['UUID']['input'];
	userId: Scalars['UUID']['input'];
};

export type RatingDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type RatingFilterInput = {
	and?: InputMaybe<Array<RatingFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<RatingFilterInput>>;
	ratingValue?: InputMaybe<FloatOperationFilterInput>;
	story?: InputMaybe<StoryFilterInput>;
	storyId?: InputMaybe<UuidOperationFilterInput>;
	user?: InputMaybe<UserFilterInput>;
	userId?: InputMaybe<UuidOperationFilterInput>;
};

export type RatingUpdateInput = {
	id: Scalars['UUID']['input'];
	ratingValue?: InputMaybe<Scalars['Float']['input']>;
};

export type Story = {
	__typename?: 'Story';
	createdAt: Scalars['DateTime']['output'];
	difficulty?: Maybe<Scalars['String']['output']>;
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	playthroughs?: Maybe<Array<Playthrough>>;
	ratings?: Maybe<Array<Rating>>;
	storyNodes?: Maybe<Array<StoryNode>>;
	targetAge?: Maybe<Scalars['Int']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	user?: Maybe<User>;
	userId?: Maybe<Scalars['UUID']['output']>;
};

export type StoryAddInput = {
	difficulty: Scalars['String']['input'];
	targetAge: Scalars['Int']['input'];
	title: Scalars['String']['input'];
	userId: Scalars['UUID']['input'];
};

export type StoryDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type StoryFilterInput = {
	and?: InputMaybe<Array<StoryFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	difficulty?: InputMaybe<StringOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<StoryFilterInput>>;
	playthroughs?: InputMaybe<ListFilterInputTypeOfPlaythroughFilterInput>;
	ratings?: InputMaybe<ListFilterInputTypeOfRatingFilterInput>;
	storyNodes?: InputMaybe<ListFilterInputTypeOfStoryNodeFilterInput>;
	targetAge?: InputMaybe<IntOperationFilterInput>;
	title?: InputMaybe<StringOperationFilterInput>;
	user?: InputMaybe<UserFilterInput>;
	userId?: InputMaybe<UuidOperationFilterInput>;
};

export type StoryNode = {
	__typename?: 'StoryNode';
	combatDatas?: Maybe<Array<CombatData>>;
	createdAt: Scalars['DateTime']['output'];
	encounterType?: Maybe<Scalars['String']['output']>;
	id: Scalars['UUID']['output'];
	isCheckpoint?: Maybe<Scalars['Boolean']['output']>;
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	story?: Maybe<Story>;
	storyId: Scalars['UUID']['output'];
	storyNodeDeathStatistics?: Maybe<Array<StoryNodeDeathStatistic>>;
	storyNodeOptions?: Maybe<Array<StoryNodeOption>>;
	storyText?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	visitedStoryNodes?: Maybe<Array<VisitedStoryNode>>;
};

export type StoryNodeAddInput = {
	encounterType: Scalars['String']['input'];
	isCheckpoint: Scalars['Boolean']['input'];
	storyId: Scalars['UUID']['input'];
	storyText: Scalars['String']['input'];
	title: Scalars['String']['input'];
};

export type StoryNodeDeathStatistic = {
	__typename?: 'StoryNodeDeathStatistic';
	createdAt: Scalars['DateTime']['output'];
	deathCount: Scalars['Int']['output'];
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	storyNode?: Maybe<StoryNode>;
	storyNodeId: Scalars['UUID']['output'];
};

export type StoryNodeDeathStatisticAddInput = {
	deathCount: Scalars['Int']['input'];
	storyNodeId: Scalars['UUID']['input'];
};

export type StoryNodeDeathStatisticDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type StoryNodeDeathStatisticFilterInput = {
	and?: InputMaybe<Array<StoryNodeDeathStatisticFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	deathCount?: InputMaybe<IntOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<StoryNodeDeathStatisticFilterInput>>;
	storyNode?: InputMaybe<StoryNodeFilterInput>;
	storyNodeId?: InputMaybe<UuidOperationFilterInput>;
};

export type StoryNodeDeathStatisticUpdateInput = {
	deathCount?: InputMaybe<Scalars['Int']['input']>;
	id: Scalars['UUID']['input'];
};

export type StoryNodeDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type StoryNodeFilterInput = {
	and?: InputMaybe<Array<StoryNodeFilterInput>>;
	combatDatas?: InputMaybe<ListFilterInputTypeOfCombatDataFilterInput>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	encounterType?: InputMaybe<StringOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isCheckpoint?: InputMaybe<BooleanOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<StoryNodeFilterInput>>;
	story?: InputMaybe<StoryFilterInput>;
	storyId?: InputMaybe<UuidOperationFilterInput>;
	storyNodeDeathStatistics?: InputMaybe<ListFilterInputTypeOfStoryNodeDeathStatisticFilterInput>;
	storyNodeOptions?: InputMaybe<ListFilterInputTypeOfStoryNodeOptionFilterInput>;
	storyText?: InputMaybe<StringOperationFilterInput>;
	title?: InputMaybe<StringOperationFilterInput>;
	visitedStoryNodes?: InputMaybe<ListFilterInputTypeOfVisitedStoryNodeFilterInput>;
};

export type StoryNodeOption = {
	__typename?: 'StoryNodeOption';
	condition?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	destinationNode: Scalars['UUID']['output'];
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	optionText?: Maybe<Scalars['String']['output']>;
	storyNode?: Maybe<StoryNode>;
	storyNodeId: Scalars['UUID']['output'];
};

export type StoryNodeOptionAddInput = {
	condition: Scalars['String']['input'];
	destinationNode: Scalars['UUID']['input'];
	optionText: Scalars['String']['input'];
	storyNodeId: Scalars['UUID']['input'];
};

export type StoryNodeOptionDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type StoryNodeOptionFilterInput = {
	and?: InputMaybe<Array<StoryNodeOptionFilterInput>>;
	condition?: InputMaybe<StringOperationFilterInput>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	destinationNode?: InputMaybe<UuidOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	optionText?: InputMaybe<StringOperationFilterInput>;
	or?: InputMaybe<Array<StoryNodeOptionFilterInput>>;
	storyNode?: InputMaybe<StoryNodeFilterInput>;
	storyNodeId?: InputMaybe<UuidOperationFilterInput>;
};

export type StoryNodeOptionUpdateInput = {
	condition?: InputMaybe<Scalars['String']['input']>;
	destinationNode?: InputMaybe<Scalars['UUID']['input']>;
	id: Scalars['UUID']['input'];
	optionText?: InputMaybe<Scalars['String']['input']>;
};

export type StoryNodeUpdateInput = {
	encounterType?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['UUID']['input'];
	isCheckpoint?: InputMaybe<Scalars['Boolean']['input']>;
	storyText?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryUpdateInput = {
	difficulty?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['UUID']['input'];
	targetAge?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type StringOperationFilterInput = {
	and?: InputMaybe<Array<StringOperationFilterInput>>;
	contains?: InputMaybe<Scalars['String']['input']>;
	endsWith?: InputMaybe<Scalars['String']['input']>;
	eq?: InputMaybe<Scalars['String']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	ncontains?: InputMaybe<Scalars['String']['input']>;
	nendsWith?: InputMaybe<Scalars['String']['input']>;
	neq?: InputMaybe<Scalars['String']['input']>;
	nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	nstartsWith?: InputMaybe<Scalars['String']['input']>;
	or?: InputMaybe<Array<StringOperationFilterInput>>;
	startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
	__typename?: 'User';
	authZeroUserId?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	firstName?: Maybe<Scalars['String']['output']>;
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	lastName?: Maybe<Scalars['String']['output']>;
	modifiedAt: Scalars['DateTime']['output'];
	playthroughs?: Maybe<Array<Playthrough>>;
	ratings?: Maybe<Array<Rating>>;
	stories?: Maybe<Array<Story>>;
};

export type UserAddInput = {
	authZeroUserId: Scalars['String']['input'];
	firstName: Scalars['String']['input'];
	lastName: Scalars['String']['input'];
};

export type UserDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type UserFilterInput = {
	and?: InputMaybe<Array<UserFilterInput>>;
	authZeroUserId?: InputMaybe<StringOperationFilterInput>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	firstName?: InputMaybe<StringOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	lastName?: InputMaybe<StringOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<UserFilterInput>>;
	playthroughs?: InputMaybe<ListFilterInputTypeOfPlaythroughFilterInput>;
	ratings?: InputMaybe<ListFilterInputTypeOfRatingFilterInput>;
	stories?: InputMaybe<ListFilterInputTypeOfStoryFilterInput>;
};

export type UserUpdateInput = {
	authZeroUserId?: InputMaybe<Scalars['String']['input']>;
	firstName?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['UUID']['input'];
	lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UuidOperationFilterInput = {
	eq?: InputMaybe<Scalars['UUID']['input']>;
	gt?: InputMaybe<Scalars['UUID']['input']>;
	gte?: InputMaybe<Scalars['UUID']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
	lt?: InputMaybe<Scalars['UUID']['input']>;
	lte?: InputMaybe<Scalars['UUID']['input']>;
	neq?: InputMaybe<Scalars['UUID']['input']>;
	ngt?: InputMaybe<Scalars['UUID']['input']>;
	ngte?: InputMaybe<Scalars['UUID']['input']>;
	nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
	nlt?: InputMaybe<Scalars['UUID']['input']>;
	nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type VisitedStoryNode = {
	__typename?: 'VisitedStoryNode';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['UUID']['output'];
	isDeleted: Scalars['Boolean']['output'];
	modifiedAt: Scalars['DateTime']['output'];
	playthrough?: Maybe<Playthrough>;
	playthroughId: Scalars['UUID']['output'];
	previousNode: Scalars['UUID']['output'];
	storyNode?: Maybe<StoryNode>;
	storyNodeId: Scalars['UUID']['output'];
};

export type VisitedStoryNodeAddInput = {
	playthroughId: Scalars['UUID']['input'];
	previousNode: Scalars['UUID']['input'];
	storyNodeId: Scalars['UUID']['input'];
};

export type VisitedStoryNodeDeleteOrRestoreInput = {
	id: Scalars['UUID']['input'];
	isDeleted: Scalars['Boolean']['input'];
};

export type VisitedStoryNodeFilterInput = {
	and?: InputMaybe<Array<VisitedStoryNodeFilterInput>>;
	createdAt?: InputMaybe<DateTimeOperationFilterInput>;
	id?: InputMaybe<UuidOperationFilterInput>;
	isDeleted?: InputMaybe<BooleanOperationFilterInput>;
	modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
	or?: InputMaybe<Array<VisitedStoryNodeFilterInput>>;
	playthrough?: InputMaybe<PlaythroughFilterInput>;
	playthroughId?: InputMaybe<UuidOperationFilterInput>;
	previousNode?: InputMaybe<UuidOperationFilterInput>;
	storyNode?: InputMaybe<StoryNodeFilterInput>;
	storyNodeId?: InputMaybe<UuidOperationFilterInput>;
};

export type VisitedStoryNodeMutation = {
	__typename?: 'VisitedStoryNodeMutation';
	addVisitedStoryNode: VisitedStoryNode;
	deleteOrRestoreVisitedStoryNode: VisitedStoryNode;
	updateVisitedStoryNode: VisitedStoryNode;
};

export type VisitedStoryNodeMutationAddVisitedStoryNodeArgs = {
	input: VisitedStoryNodeAddInput;
};

export type VisitedStoryNodeMutationDeleteOrRestoreVisitedStoryNodeArgs = {
	input: VisitedStoryNodeDeleteOrRestoreInput;
};

export type VisitedStoryNodeMutationUpdateVisitedStoryNodeArgs = {
	input: VisitedStoryNodeUpdateInput;
};

export type VisitedStoryNodeUpdateInput = {
	id: Scalars['UUID']['input'];
	previousNode: Scalars['UUID']['input'];
};

export type GetUsersQueryVariables = Exact<{
	where?: InputMaybe<UserFilterInput>;
}>;

export type GetUsersQuery = {
	__typename?: 'Query';
	users: Array<{
		__typename?: 'User';
		id: any;
		firstName?: string | null;
		lastName?: string | null;
	}>;
};

export const GetUsersDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetUsers' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserFilterInput' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'users' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUsersQuery(
	baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
