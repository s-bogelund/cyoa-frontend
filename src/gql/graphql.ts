/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CombatData = {
  __typename?: 'CombatData';
  createdAt: Scalars['DateTime']['output'];
  diceType?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isDiceRollRequired: Scalars['Boolean']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  storyNode?: Maybe<StoryNode>;
  storyNodeId: Scalars['UUID']['output'];
};

export type CombatDataAddInput = {
  diceType?: InputMaybe<Scalars['Int']['input']>;
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

export type CombatDataSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  diceType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isDiceRollRequired?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  storyNode?: InputMaybe<StoryNodeSortInput>;
  storyNodeId?: InputMaybe<SortEnumType>;
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

export type PlaythroughSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  currentNode?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isCompleted?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isOngoing?: InputMaybe<SortEnumType>;
  isPlayerDead?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  story?: InputMaybe<StorySortInput>;
  storyId?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
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
  order?: InputMaybe<Array<CombatDataSortInput>>;
  where?: InputMaybe<CombatDataFilterInput>;
};


export type QueryPlaythroughQueryArgs = {
  where?: InputMaybe<PlaythroughFilterInput>;
};


export type QueryPlaythroughsArgs = {
  order?: InputMaybe<Array<PlaythroughSortInput>>;
  where?: InputMaybe<PlaythroughFilterInput>;
};


export type QueryRatingQueryArgs = {
  where?: InputMaybe<RatingFilterInput>;
};


export type QueryRatingsArgs = {
  order?: InputMaybe<Array<RatingSortInput>>;
  where?: InputMaybe<RatingFilterInput>;
};


export type QueryStoriesArgs = {
  order?: InputMaybe<Array<StorySortInput>>;
  where?: InputMaybe<StoryFilterInput>;
};


export type QueryStoryNodeDeathStatisticQueryArgs = {
  where?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
};


export type QueryStoryNodeDeathStatisticsArgs = {
  order?: InputMaybe<Array<StoryNodeDeathStatisticSortInput>>;
  where?: InputMaybe<StoryNodeDeathStatisticFilterInput>;
};


export type QueryStoryNodeOptionQueryArgs = {
  where?: InputMaybe<StoryNodeOptionFilterInput>;
};


export type QueryStoryNodeOptionsArgs = {
  order?: InputMaybe<Array<StoryNodeOptionSortInput>>;
  where?: InputMaybe<StoryNodeOptionFilterInput>;
};


export type QueryStoryNodeQueryArgs = {
  where?: InputMaybe<StoryNodeFilterInput>;
};


export type QueryStoryNodesArgs = {
  order?: InputMaybe<Array<StoryNodeSortInput>>;
  where?: InputMaybe<StoryNodeFilterInput>;
};


export type QueryStoryQueryArgs = {
  where?: InputMaybe<StoryFilterInput>;
};


export type QueryUserQueryArgs = {
  where?: InputMaybe<UserFilterInput>;
};


export type QueryUsersArgs = {
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
};


export type QueryVisitedStoryNodeQueryArgs = {
  where?: InputMaybe<VisitedStoryNodeFilterInput>;
};


export type QueryVisitedStoryNodesArgs = {
  order?: InputMaybe<Array<VisitedStoryNodeSortInput>>;
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

export type RatingSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  ratingValue?: InputMaybe<SortEnumType>;
  story?: InputMaybe<StorySortInput>;
  storyId?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type RatingUpdateInput = {
  id: Scalars['UUID']['input'];
  ratingValue?: InputMaybe<Scalars['Float']['input']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Story = {
  __typename?: 'Story';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  playthroughs?: Maybe<Array<Playthrough>>;
  playtime?: Maybe<Scalars['Int']['output']>;
  ratings?: Maybe<Array<Rating>>;
  storyNodes?: Maybe<Array<StoryNode>>;
  targetAge?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type StoryAddInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  playtime?: InputMaybe<Scalars['Int']['input']>;
  targetAge?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

export type StoryDeleteOrRestoreInput = {
  id: Scalars['UUID']['input'];
  isDeleted: Scalars['Boolean']['input'];
};

export type StoryFilterInput = {
  and?: InputMaybe<Array<StoryFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  difficulty?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  modifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
  or?: InputMaybe<Array<StoryFilterInput>>;
  playthroughs?: InputMaybe<ListFilterInputTypeOfPlaythroughFilterInput>;
  playtime?: InputMaybe<IntOperationFilterInput>;
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
  isRootNode?: Maybe<Scalars['Boolean']['output']>;
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
  encounterType?: InputMaybe<Scalars['String']['input']>;
  isCheckpoint?: InputMaybe<Scalars['Boolean']['input']>;
  storyId: Scalars['UUID']['input'];
  storyText?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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

export type StoryNodeDeathStatisticSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  deathCount?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  storyNode?: InputMaybe<StoryNodeSortInput>;
  storyNodeId?: InputMaybe<SortEnumType>;
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
  isRootNode?: InputMaybe<BooleanOperationFilterInput>;
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
  condition?: InputMaybe<Scalars['String']['input']>;
  destinationNode: Scalars['UUID']['input'];
  optionText?: InputMaybe<Scalars['String']['input']>;
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

export type StoryNodeOptionSortInput = {
  condition?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  destinationNode?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  optionText?: InputMaybe<SortEnumType>;
  storyNode?: InputMaybe<StoryNodeSortInput>;
  storyNodeId?: InputMaybe<SortEnumType>;
};

export type StoryNodeOptionUpdateInput = {
  condition?: InputMaybe<Scalars['String']['input']>;
  destinationNode?: InputMaybe<Scalars['UUID']['input']>;
  id: Scalars['UUID']['input'];
  optionText?: InputMaybe<Scalars['String']['input']>;
};

export type StoryNodeSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  encounterType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isCheckpoint?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isRootNode?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  story?: InputMaybe<StorySortInput>;
  storyId?: InputMaybe<SortEnumType>;
  storyText?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type StoryNodeUpdateInput = {
  encounterType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  isCheckpoint?: InputMaybe<Scalars['Boolean']['input']>;
  storyText?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StorySortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  difficulty?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  playtime?: InputMaybe<SortEnumType>;
  targetAge?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type StoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  playtime?: InputMaybe<Scalars['Int']['input']>;
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
  authZeroUserId?: InputMaybe<Scalars['String']['input']>;
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

export type UserSortInput = {
  authZeroUserId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
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

export type VisitedStoryNodeSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  modifiedAt?: InputMaybe<SortEnumType>;
  playthrough?: InputMaybe<PlaythroughSortInput>;
  playthroughId?: InputMaybe<SortEnumType>;
  previousNode?: InputMaybe<SortEnumType>;
  storyNode?: InputMaybe<StoryNodeSortInput>;
  storyNodeId?: InputMaybe<SortEnumType>;
};

export type VisitedStoryNodeUpdateInput = {
  id: Scalars['UUID']['input'];
  previousNode: Scalars['UUID']['input'];
};

export type GetNodeForReaderSummaryQueryVariables = Exact<{
  idInput?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetNodeForReaderSummaryQuery = { __typename?: 'Query', storyNodes: Array<{ __typename?: 'StoryNode', id: any, title?: string | null, storyText?: string | null, encounterType?: string | null, story?: { __typename?: 'Story', id: any, title?: string | null, difficulty?: string | null, targetAge?: number | null } | null }> };

export type GetAllStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStoriesQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', id: any, title?: string | null, difficulty?: string | null, targetAge?: number | null, playtime?: number | null, createdAt: any, modifiedAt: any, isDeleted: boolean, user?: { __typename?: 'User', id: any, firstName?: string | null, lastName?: string | null } | null, storyNodes?: Array<{ __typename?: 'StoryNode', id: any, title?: string | null, storyText?: string | null }> | null, ratings?: Array<{ __typename?: 'Rating', ratingValue: number }> | null, playthroughs?: Array<{ __typename?: 'Playthrough', id: any, isOngoing: boolean, isCompleted: boolean }> | null }> };

export type GetStoryForStoryPageQueryVariables = Exact<{
  idInput?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetStoryForStoryPageQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', id: any, title?: string | null, targetAge?: number | null, playtime?: number | null, description?: string | null, difficulty?: string | null, storyNodes?: Array<{ __typename?: 'StoryNode', id: any, encounterType?: string | null }> | null, ratings?: Array<{ __typename?: 'Rating', ratingValue: number }> | null }> };

export type GetStoryForWriterSummaryQueryVariables = Exact<{
  idInput?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetStoryForWriterSummaryQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', id: any, title?: string | null, difficulty?: string | null, targetAge?: number | null, storyNodes?: Array<{ __typename?: 'StoryNode', id: any }> | null }> };

export type GetStoryNodeForPlayNodeQueryVariables = Exact<{
  idInput?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetStoryNodeForPlayNodeQuery = { __typename?: 'Query', storyNodes: Array<{ __typename?: 'StoryNode', id: any, title?: string | null, storyText?: string | null, storyNodeOptions?: Array<{ __typename?: 'StoryNodeOption', id: any, storyNodeId: any, destinationNode: any, optionText?: string | null }> | null }> };

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<UserFilterInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: any, firstName?: string | null, lastName?: string | null }> };


export const GetNodeForReaderSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNodeForReaderSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storyNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"storyText"}},{"kind":"Field","name":{"kind":"Name","value":"encounterType"}},{"kind":"Field","name":{"kind":"Name","value":"story"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"targetAge"}}]}}]}}]}}]} as unknown as DocumentNode<GetNodeForReaderSummaryQuery, GetNodeForReaderSummaryQueryVariables>;
export const GetAllStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"targetAge"}},{"kind":"Field","name":{"kind":"Name","value":"playtime"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storyNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"storyText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playthroughs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOngoing"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}}]}}]} as unknown as DocumentNode<GetAllStoriesQuery, GetAllStoriesQueryVariables>;
export const GetStoryForStoryPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStoryForStoryPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"targetAge"}},{"kind":"Field","name":{"kind":"Name","value":"playtime"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"storyNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"encounterType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetStoryForStoryPageQuery, GetStoryForStoryPageQueryVariables>;
export const GetStoryForWriterSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStoryForWriterSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"targetAge"}},{"kind":"Field","name":{"kind":"Name","value":"storyNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetStoryForWriterSummaryQuery, GetStoryForWriterSummaryQueryVariables>;
export const GetStoryNodeForPlayNodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStoryNodeForPlayNode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storyNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idInput"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"storyText"}},{"kind":"Field","name":{"kind":"Name","value":"storyNodeOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"storyNodeId"}},{"kind":"Field","name":{"kind":"Name","value":"destinationNode"}},{"kind":"Field","name":{"kind":"Name","value":"optionText"}}]}}]}}]}}]} as unknown as DocumentNode<GetStoryNodeForPlayNodeQuery, GetStoryNodeForPlayNodeQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;