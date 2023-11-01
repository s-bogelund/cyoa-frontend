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

export type RFState = {
	nodes: Node[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	addCustomNode: (node: Node) => void;
	addCustomEdge: (edge: Edge) => void;
};

const useStore = create<RFState>((set, get) => ({
	nodes: initialNodes,
	edges: initialEdges,
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		});
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
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
	},
	addCustomEdge: (edge: Edge) => {
		set(state => ({
			edges: [...state.edges, edge],
		}));
	},
}));

export default useStore;
