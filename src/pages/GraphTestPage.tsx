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

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
});

function GraphTestPage() {
	const { nodes, edges, onNodesChange, onEdgesChange } = useStore(selector, shallow);

	// const flowState = useReactFlow();

	const nodeTypes = useMemo(() => ({ testNode: BasicStoryNode }), []);

	return (
		<>
			<ReactFlow
				nodes={nodes}
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
