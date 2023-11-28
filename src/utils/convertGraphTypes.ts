import { StoryNode, StoryNodeOption } from '@/gql/graphql';
import { ExtendedNode, StoryNodeOptionType, StoryNodeType } from '@/types/graphTypes';
import { Edge } from 'reactflow';

export const convertStoryNodeOption = (gqlOption: StoryNodeOption): StoryNodeOptionType => ({
	id: gqlOption.id,
	destinationNode: gqlOption.destinationNode,
	optionText: gqlOption.optionText ?? '',
	condition: gqlOption.condition ?? '',
});

export const convertGqlNodes = (gqlNodes: StoryNode[]): ExtendedNode[] => {
	return gqlNodes.map(gqlNode => ({
		id: gqlNode.id,
		type: 'testNode',
		position: { x: 0, y: 0 },
		data: {
			id: gqlNode.id,
			title: gqlNode.title ?? '',
			storyText: gqlNode.storyText ?? '',
			encounterType: gqlNode.encounterType ?? '',
			isCheckpoint: gqlNode.isCheckpoint ?? false,
			storyNodeOptions: gqlNode.storyNodeOptions?.map(option => ({
				id: option.id,
				destinationNode: option.destinationNode,
				optionText: option.optionText ?? '',
				condition: option.condition ?? '',
			})),
		},
	}));
};

export const createEdgesFromStoryNodes = (nodes: ExtendedNode[]): Edge[] => {
	let edges: Edge[] = [];

	nodes.forEach(node => {
		node.data.storyNodeOptions?.forEach(option => {
			const edgeId = `e${node.id}-${option.destinationNode}`;
			const newEdge: Edge = {
				id: edgeId,
				source: node.id,
				target: option.destinationNode,
			};
			edges.push(newEdge);
		});
	});

	return edges;
};
