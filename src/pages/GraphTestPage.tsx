import dagre from 'dagre';
import ELK, { ElkNode } from 'elkjs/lib/elk.bundled.js';
import { Sheet } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
	applyEdgeChanges,
	applyNodeChanges,
	Background,
	BezierEdge,
	ControlButton,
	Controls,
	Edge,
	EdgeTypes,
	MiniMap,
	Node,
	NodeChange,
	NodeTypes,
	SmoothStepEdge,
	useReactFlow,
} from 'reactflow';
import { shallow } from 'zustand/shallow';

import StoryNode from '@/components/graph/StoryNode';
import { Button } from '@/components/shadcn/ui/button';
import useStore, { RFState } from '@/graphStore';

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
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

const GraphTestPage = ({ nodeTypes }: { nodeTypes: NodeTypes }) => {
	const { nodes, edges, onNodesChange, onEdgesChange } = useStore(selector, shallow);

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
				<Controls>
					<ControlButton
						onClick={() => alert('Something magical just happened. ✨')}
					></ControlButton>
				</Controls>
			</ReactFlow>
			{/* <Button onClick={() => console.log(nodes, edges)}>+</Button> */}
		</>
	);
};

export default GraphTestPage;
