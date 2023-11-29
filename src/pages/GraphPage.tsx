import dagre from 'dagre';
import { useEffect, useMemo, useState } from 'react';
import ReactFlow, { Background, Controls, Edge, MiniMap, Node, NodeTypes } from 'reactflow';
import { shallow } from 'zustand/shallow';

import useStore, { RFState } from '@/graphStore';
import { useQuery } from '@apollo/client';
import { GET_STORY_QUERY } from '@/api/queries/getStory';
import { StoryNode } from '@/gql/graphql';
import { convertGqlNodes } from '@/utils/convertGraphTypes';
import { useSearchParams } from 'react-router-dom';

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
	loadGraphData: state.loadGraphData,
});

const layoutGraph = (nodes: Node[], edges: Edge[]) => {
	const g = new dagre.graphlib.Graph();
	g.setGraph({
		rankdir: 'LR', // direction
		ranker: 'shortest-path', // layout algorithm
		nodesep: 30, // minimum vertical distance between nodes
		ranksep: 100, // horizontal distance between nodes
	});
	g.setDefaultEdgeLabel(() => ({}));

	nodes.forEach(node => {
		// This was set to fit the custom node size
		g.setNode(node.id, { width: 128, height: 96 });
	});

	edges.forEach(edge => {
		g.setEdge(edge.source, edge.target);
	});

	dagre.layout(g);

	return nodes.map(node => {
		const { x, y } = g.node(node.id);
		return {
			...node,
			position: { x, y },
		};
	});
};

const GraphPage = ({ nodeTypes }: { nodeTypes: NodeTypes }) => {
	const { nodes, edges, onNodesChange, onEdgesChange, loadGraphData } = useStore(selector);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		let storyId = searchParams.get('storyId');
		if (storyId) {
			loadGraphData(storyId);
		}
	}, [loadGraphData, searchParams]);
	const dagreNodes = useMemo(() => layoutGraph(nodes, edges), [nodes, edges]);

	return (
		<>
			<ReactFlow
				nodes={dagreNodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				fitView
				nodeTypes={nodeTypes}
				proOptions={{ hideAttribution: true }}
				minZoom={0.25}
			>
				<MiniMap
					zoomable
					pannable
					maskColor="white"
					nodeColor={'#020715'}
					style={{
						backgroundColor: '#a5a5a5',
						position: 'absolute',
						bottom: 0,
						right: 0,
						zIndex: 1000,
					}}
				/>
				<Background color="#ccc" />
			</ReactFlow>
		</>
	);
};

export default GraphPage;
