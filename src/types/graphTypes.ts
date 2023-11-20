import { Node } from 'reactflow';

type StoryNodeData = {
	label: string;
	prose: string;
	choices: StoryChoice[];
};

export type StoryNodeType = {
	id: string;
	title: string;
	storyText: string;
	encounterType: string;
	isCheckpoint: boolean;
};

export type ExtendedNode = Node<StoryNodeType>;

type StoryChoice = {
	label: string;
	edge: StoryEdge;
};

type StoryEdge = {
	id: string;
	source: string;
	target: string;
};
