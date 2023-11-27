import 'reactflow/dist/style.css';

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useQuery } from '@apollo/client';
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

import { ADD_STORY_NODE_MUTATION } from './api/mutations/story-node/addStoryNode';
import { UPDATE_STORY_NODE_MUTATION } from './api/mutations/story-node/updateStoryNode';
import { ADD_STORY_NODE_OPTION_MUTATION } from './api/mutations/story-node-option/addStoryNodeOption';
import { UPDATE_STORY_NODE_OPTION_MUTATION } from './api/mutations/story-node-option/updateStoryNodeOptions';
import { GET_STORY_QUERY } from './api/queries/getStory';
import { ExtendedNode } from './types/graphTypes';
import { convertGqlNodes, createEdgesFromStoryNodes } from './utils/convertGraphTypes';
import { dummyGraph } from './utils/dummyData';
import { loadGraphStateLS, saveGraphStateLS } from './utils/graph';

const client = new ApolloClient({
	uri: 'http://localhost:5186/graphql/', // Replace with your GraphQL endpoint
	cache: new InMemoryCache(),
});

export type RFState = {
	storyId: string;
	nodes: ExtendedNode[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	addCustomNode: (node: Node) => void;
	addCustomEdge: (edge: Edge) => void;
	getNodeById: (id: string) => Node | undefined;
	getEdgesByNodeId: (id: string) => Edge[] | undefined;
	getAllNeighbours: (id: string) => Node[];
	saveGraphState: () => void;
	loadGraphData: (storyId: string) => void;
};

const useStore = create<RFState>((set, get) => ({
	storyId: '',
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
	addCustomNode: async (node: Node) => {
		try {
			const result = await client.mutate({
				mutation: ADD_STORY_NODE_MUTATION,
				variables: {
					input: {
						storyId: get().storyId,
						title: 'Ingen Titel',
						storyText: '',
						encounterType: 'other',
						isCheckpoint: false,
					},
				},
			});

			console.log('Result:', result);
		} catch (error) {
			console.error('Error adding node:', error);
		}
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
	loadGraphData: async (storyId: string) => {
		set({ storyId: storyId });

		try {
			const { data } = await client.query({
				query: GET_STORY_QUERY,
				variables: { id: storyId },
			});

			if (data && data.storyQuery) {
				const convertedNodes = convertGqlNodes(data.storyQuery.storyNodes);
				const convertedEdges = createEdgesFromStoryNodes(convertedNodes);

				set({
					nodes: convertedNodes,
					edges: convertedEdges,
				});
			}
		} catch (error) {
			console.error('Error fetching story data:', error);
		}
	},
}));

export default useStore;
