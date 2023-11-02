type StoryNodeData = {
	label: string;
	prose: string;
	choices: StoryChoice[];
};

type StoryNode = {
	id: string;
	data: StoryNodeData;
	position: { x: number; y: number };
};

type StoryChoice = {
	label: string;
	edge: StoryEdge;
};

type StoryEdge = {
	id: string;
	source: string;
	target: string;
};
