import { Node } from 'reactflow';

export type StoryNodeType = {
	id: string;
	title: string;
	storyText: string;
	encounterType: string;
	isCheckpoint: boolean;
	storyId?: string;
	storyNodeOptions?: StoryNodeOptionType[];
};

export type ExtendedNode = Node<StoryNodeType>;

export type StoryNodeOptionType = {
	id: string;
	destinationNode: string;
	optionText?: string;
	condition?: string;
};

type StoryEdge = {
	id: string;
	source: string;
	target: string;
};
