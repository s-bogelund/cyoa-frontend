import 'reactflow/dist/style.css';

import { ApolloClient, InMemoryCache } from '@apollo/client';
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

import {
	ADD_STORY_NODE_MUTATION,
	AddStoryNodePayload,
} from './api/mutations/story-node/addStoryNode';
import {
	UPDATE_STORY_NODE_MUTATION,
	UpdateStoryNodePayload,
} from './api/mutations/story-node/updateStoryNode';
import {
	ADD_STORY_NODE_OPTION_MUTATION,
	AddStoryNodeOptionPayload,
} from './api/mutations/story-node-option/addStoryNodeOption';
import { GET_STORY_QUERY } from './api/queries/getStory';
import { ExtendedNode } from './types/graphTypes';
import { convertGqlNodes, createEdgesFromStoryNodes } from './utils/convertGraphTypes';
import { saveGraphStateLS } from './utils/graph';
import { StoryNodeOption } from './gql/graphql';
import {
	UPDATE_STORY_NODE_OPTION_MUTATION,
	UpdateStoryNodeOptionPayload,
} from './api/mutations/story-node-option/updateStoryNodeOptions';

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
	addCustomNode: (node: AddStoryNodePayload, parentId: string) => Promise<void>;
	addCustomEdge: (edge: Edge) => void;
	getNodeById: (id: string) => Node | undefined;
	getEdgesByNodeId: (id: string) => Edge[] | undefined;
	getAllNeighbours: (id: string) => Node[];
	saveGraphState: () => void;
	loadGraphData: (storyId: string) => Promise<void>;
	updateStoryNode: (node: UpdateStoryNodePayload) => void;
	updateStoryNodeOption: (option: UpdateStoryNodeOptionPayload) => void;
	subscribe: (callback: () => void) => () => void;
};

const useStore = create<RFState>((set, get) => {
	const subscribers = new Set<() => void>();

	const notifySubscribers = () => {
		subscribers.forEach(callback => callback());
	};
	return {
		storyId: '',
		nodes: [],
		edges: [],

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
		updateStoryNode: async (node: UpdateStoryNodePayload) => {
			try {
				const result = await client.mutate({
					mutation: UPDATE_STORY_NODE_MUTATION,
					variables: {
						input: {
							id: node.id,
							title: node.title,
							storyText: node.storyText,
							encounterType: node.encounterType,
							isCheckpoint: node.isCheckpoint,
						},
					},
				});

				console.log('Result:', result);
			} catch (error) {
				console.error('Error updating node:', error);
			}
		},
		updateStoryNodeOption: async (option: UpdateStoryNodeOptionPayload) => {
			try {
				const result = await client.mutate({
					mutation: UPDATE_STORY_NODE_OPTION_MUTATION,
					variables: {
						input: {
							id: option.id,
							destinationNode: option.destinationNode,
							optionText: option.optionText,
						},
					},
				});
			} catch (error) {
				console.error('Error updating node:', error);
			}
		},
		addCustomNode: async (node: AddStoryNodePayload, parentId: string) => {
			console.log(`Adding node ${node} with parent ${parentId}`);
			console.log('Node:', node);
			const parentNode = get().getNodeById(parentId);
			if (!parentNode) return;
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

				console.log('Result:', result.data.addStoryNode);

				const createdNode = {
					...node,
					id: result.data.addStoryNode.id,
				};

				const newId = result.data.addStoryNode.id;
				console.log('NewNodeId', newId);
				const newNode: ExtendedNode = {
					id: newId,
					type: 'testNode',
					data: {
						title: 'Ingen titel',
						id: newId,
						storyText: '',
						encounterType: '',
						isCheckpoint: false,
						storyId: get().storyId,
					},
					position: { x: 300, y: 300 },
				};

				const newNodeOptionPayload: AddStoryNodeOptionPayload = {
					storyNodeId: parentId,
					destinationNode: newId,
					optionText: 'Nyt valg!',
				};

				const { data } = await client.mutate({
					mutation: ADD_STORY_NODE_OPTION_MUTATION,
					variables: {
						input: newNodeOptionPayload,
					},
				});

				const newOptions = data.addStoryNodeOption as StoryNodeOption;
				console.log('newOption', newOptions);

				console.log('Created node:', newNode);
				parentNode.data.storyNodeOptions = [
					...parentNode.data.storyNodeOptions,
					{
						id: newOptions.id,
						destinationNode: newOptions.destinationNode,
						optionText: newOptions.optionText ? newOptions.optionText : '',
						condition: newOptions.condition ? newOptions.condition : '',
					},
				];
				set(state => ({
					nodes: [...state.nodes, newNode],
				}));
				const edge = {
					id: `e-${parentId}${createdNode.id}`,
					source: parentId,
					target: createdNode.id,
				};

				set(state => ({
					edges: [...state.edges, edge],
				}));

				notifySubscribers();
			} catch (error) {
				console.error('Error adding node:', error);
			}
		},
		addCustomEdge: (edge: Edge) => {
			set(state => ({
				edges: [...state.edges, edge],
			}));
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
		subscribe: (callback: () => void) => {
			subscribers.add(callback);
			return () => subscribers.delete(callback);
		},
	};
});

export default useStore;
