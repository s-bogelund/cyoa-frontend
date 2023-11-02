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
import 'reactflow/dist/style.css';
import { create } from 'zustand';
import { initialEdges, initialNodes } from './utils/dummyData';
import { loadGraphStateLS, saveGraphStateLS } from './utils/graph';

export type RFState = {
	nodes: Node[];
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
};

const useStore = create<RFState>((set, get) => ({
	nodes: loadGraphStateLS()?.nodes || initialNodes,
	edges: loadGraphStateLS()?.edges || initialEdges,
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
