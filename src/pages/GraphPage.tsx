import dagre from 'dagre';
import { useEffect, useMemo } from 'react';
import ReactFlow, { Background, Controls, Edge, MiniMap, Node, NodeTypes } from 'reactflow';
import { shallow } from 'zustand/shallow';

import useStore, { RFState } from '@/graphStore';
import { useQuery } from '@apollo/client';
import { GET_STORY_QUERY } from '@/api/queries/getStory';
import { StoryNode } from '@/gql/graphql';
import { convertGqlNodes } from '@/utils/convertGraphTypes';

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
		rankdir: 'LR',
		ranker: 'shortest-path',
		nodesep: 30,
		ranksep: 100,
	});
	g.setDefaultEdgeLabel(() => ({}));

	nodes.forEach(node => {
		// CustomNode geometry is 128x96
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
	const { nodes, edges, onNodesChange, onEdgesChange, loadGraphData } = useStore(selector, shallow);
	useEffect(() => {
		// Replace '67ca999d-884a-487f-b03b-c6f15c276958' with the actual ID you need
		loadGraphData('67ca999d-884a-487f-b03b-c6f15c276958');
	}, [loadGraphData]);
	const dagreNodes = useMemo(() => layoutGraph(nodes, edges), [nodes, edges]);

	// useEffect(() => {
	// 	if (data) {
	// 		const nodes: StoryNode[] = data.storyQuery.storyNodes;
	// 		const convertedNodes = convertGqlNodes(nodes);
	// 		console.log('convertedNodes: ', convertedNodes);
	// 	}
	// }, [data]);

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
				<Controls></Controls>
			</ReactFlow>
			{/* <Button onClick={() => console.log(nodes, edges)}>+</Button> */}
		</>
	);
};

export default GraphPage;
