import 'reactflow/dist/style.css';

import {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
	OnConnect,
	OnEdgesChange,
	OnNodesChange,
} from 'reactflow';
import { create } from 'zustand';

import { dummyGraph, initialEdges, initialNodes } from './utils/dummyData';
import { loadGraphStateLS, saveGraphStateLS, toNodeChange } from './utils/graph';
import { ExtendedNode, StoryNodeType } from './types/graphTypes';

export type RFState = {
	nodes: ExtendedNode[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	addCustomNode: (node: Node) => void;
	addCustomEdge: (edge: Edge) => void;
	getNodeById: (id: string) => Node | undefined;
	getEdgesByNodeId: (id: string) => Edge[] | undefined;
	// highlightNeighbours: (id: string, isHighlighted: boolean) => void;
	getAllNeighbours: (id: string) => Node[];
	saveGraphState: () => void;
};

const useStore = create<RFState>((set, get) => ({
	nodes: loadGraphStateLS()?.nodes || dummyGraph.nodes,
	edges: loadGraphStateLS()?.edges || dummyGraph.edges,
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		});

		saveGraphStateLS(get());
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
		saveGraphStateLS(get());
	},
	onConnect: (connection: Connection) => {
		set({
			edges: addEdge(connection, get().edges),
		});
	},
	addCustomNode: (node: Node) => {
		set(state => ({
			nodes: [...state.nodes, node],
		}));
		saveGraphStateLS(get());
	},
	addCustomEdge: (edge: Edge) => {
		set(state => ({
			edges: [...state.edges, edge],
		}));
		saveGraphStateLS(get());
	},
	getNodeById: (id: string) => {
		return get().nodes.find(node => node.id === id);
	},
	getEdgesByNodeId: (id: string) => {
		return get().edges.filter(edge => edge.source === id);
	},
	getAllNeighbours: (id: string) => {
		const node = get().getNodeById(id);
		if (node) {
			const edge = get().getEdgesByNodeId(id);
			if (edge) {
				const neighbours = edge.map(e => get().getNodeById(e.target));
				return neighbours.filter((n): n is Node => n !== undefined);
			}
		}
		return [];
	},
	saveGraphState: () => {
		saveGraphStateLS(get());
	},
	// highlightNeighbours: (id: string, isHighlighted: boolean) => {
	// 	const nodes = get().getAllNeighbours(id);
	// 	if (nodes.length > 0) {
	// 		const nodeChanges = nodes.map(node => ({
	// 			id: node.id,
	// 			data: {
	// 				...node.data,
	// 				isHighlighted,
	// 			},
	// 		}));
	// 		get().onNodesChange(nodeChanges);
	// 	}
	// },
}));

export default useStore;
