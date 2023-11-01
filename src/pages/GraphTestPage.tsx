import ELK, { ElkNode } from 'elkjs/lib/elk.bundled.js';
import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
	Edge,
	applyEdgeChanges,
	applyNodeChanges,
	Node,
	NodeTypes,
	useReactFlow,
	NodeChange,
} from 'reactflow';
import BasicStoryNode from '@/components/graph/CustomNode';
import useStore, { RFState } from '@/graphStore';
import { shallow } from 'zustand/shallow';
import { Button } from '@/components/shadcn/ui/button';
import dagre from 'dagre';

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
});

const layoutGraph = (nodes: Node[], edges: Edge[]) => {
	const g = new dagre.graphlib.Graph();
	g.setGraph({ rankdir: 'LR' });
	g.setDefaultEdgeLabel(() => ({}));

	nodes.forEach(node => {
		g.setNode(node.id, { width: 200, height: 100 });
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

function GraphTestPage() {
	const { nodes, edges, onNodesChange, onEdgesChange } = useStore(selector, shallow);

	// const flowState = useReactFlow();

	const nodeTypes = useMemo(() => ({ testNode: BasicStoryNode }), []);

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
			/>
			<Button onClick={() => console.log(nodes, edges)}>+</Button>
		</>
	);
}

export default GraphTestPage;
