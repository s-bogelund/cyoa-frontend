import { Node, NodeChange } from 'reactflow';

import { RFState } from '@/graphStore';
import { useQuery } from '@apollo/client';
import { GET_STORY_QUERY } from '@/api/queries/getStory';

export const saveGraphStateLS = (graphState: RFState) => {
	localStorage.setItem('graphState', JSON.stringify(graphState));
};

export const loadGraphStateLS = (): RFState | undefined => {
	const graphState = localStorage.getItem('graphState');
	if (graphState) {
		return JSON.parse(graphState);
	}
	return undefined;
};

// export const loadGraphStateGQL = (storyId: string) => {
// 	const { loading, error, data } = useQuery(GET_STORY_QUERY, {
// 		variables: { id: storyId },
// 	});

// 	console.log(data);

// 	if (loading) return 'Loading...';
// 	if (error) return `Error! ${error.message}`;

// 	return data.storyQuery;
// };

enum NodeTypeChange {
	Dimension = 'dimensions',
	Position = 'position',
	Selection = 'select',
	Removal = 'remove',
	Addition = 'add',
	Reset = 'reset',
}

export function toNodeChange(node: Node, changeType: NodeTypeChange): NodeChange {
	switch (changeType) {
		case NodeTypeChange.Dimension:
			return {
				id: node.id,
				type: NodeTypeChange.Dimension,
				dimensions: { width: node.width || 0, height: node.height || 0 },
				updateStyle: true, // or whatever logic you need
				resizing: node.resizing,
			};

		case NodeTypeChange.Position:
			return {
				id: node.id,
				type: NodeTypeChange.Position,
				position: node.position,
				positionAbsolute: node.positionAbsolute,
				dragging: node.dragging,
			};

		case NodeTypeChange.Selection:
			return {
				id: node.id,
				type: NodeTypeChange.Selection,
				selected: !!node.selected, // convert undefined to false
			};

		case NodeTypeChange.Removal:
			return {
				id: node.id,
				type: NodeTypeChange.Removal,
			};

		case NodeTypeChange.Addition:
			return {
				item: node,
				type: NodeTypeChange.Addition,
			};

		case NodeTypeChange.Reset:
			return {
				item: node,
				type: NodeTypeChange.Reset,
			};

		default:
			throw new Error(`Unsupported change type: ${changeType}`);
	}
}
