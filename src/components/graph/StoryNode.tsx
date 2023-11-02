import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { Edge, Handle, Node, NodeProps, NodeTypes, Position, useReactFlow } from 'reactflow';

import useStore from '@/graphStore';
import { ExtendedNode, StoryNodeType } from '@/types/graphTypes';
import { Label } from '@radix-ui/react-label';

import { Button } from '../shadcn/ui/button';
import { Card, CardHeader } from '../shadcn/ui/card';
import { Input } from '../shadcn/ui/input';
import GraphSheet from './GraphSheet';
import { toNodeChange } from '@/utils/graph';

export type StoryNodeProps = {
	header?: string;
	isHighlighted?: boolean;
	isSelected?: boolean;
	onClick?: () => void;
	encounterType?: 'combat' | 'conversation' | 'death';
	isRoot?: boolean;
} & NodeProps;

const StoryNode: FC<StoryNodeProps> = ({
	id,
	data,
	isRoot,
	isHighlighted = false,
	dragging = false,
	...rest
}) => {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [hasMaxChildren, setHasMaxChildren] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);
	const { setNodes } = useReactFlow();
	const store = useStore.getState();
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.currentTarget.value);
	}, []);

	console.log('storyNode', data);

	const addChildNode = useCallback(() => {
		if (hasMaxChildren) return;

		const newNodeId = `${Number(id) + Math.random() * 2}`; // Generate a unique ID for the new node
		const newNode: ExtendedNode = {
			id: newNodeId,
			type: 'testNode',
			data: {
				title: 'New Node',
				id: newNodeId,
				storyText: '',
				encounterType: '',
				isCheckpoint: false,
			},
			position: { x: 300, y: 300 }, // replace with desired position
		};

		const newEdge: Edge = {
			id: `${id}-${newNodeId}`,
			source: id,
			target: newNodeId,
		};

		addCustomNode(newNode);
		addCustomEdge(newEdge);

		const currentNoOfChildren = store.getEdgesByNodeId(id)?.length || 0;
		if (currentNoOfChildren >= 4) {
			setHasMaxChildren(true);
		}

		const newStore = useStore.getState();
		console.log('Added node', newStore);
	}, [id, addCustomNode, addCustomEdge, hasMaxChildren, store]);

	const handleMouseEnter = useCallback(() => {
		const currentNoOfChildren = store.getEdgesByNodeId(id)?.length || 0;
		setIsHovering(true);
		if (currentNoOfChildren >= 4) {
			setHasMaxChildren(true);
			setIsHovering(false);
		} else {
			setHasMaxChildren(false);
		}
	}, [store, id]);

	const updateNodeInStore = (nodeInfo: StoryNodeType) => {
		setNodes(nodes => {
			const newNodes = nodes.map(node => {
				if (node.id === nodeInfo.id) {
					return {
						...node,
						data: nodeInfo,
					};
				}
				return node;
			});
			return newNodes;
		});
	};

	return (
		<GraphSheet nodeInfo={data} onUpdate={nodeInfo => updateNodeInStore(nodeInfo)}>
			<Card
				onChange={onChange}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => setIsHovering(false)}
				className={`relative flex flex-col items-start p-2 w-32 h-24 text-black border border-white cursor-pointer ${
					isHighlighted ? 'border-2 !shadow-md !shadow-slate-500' : ''
				}`}
			>
				<CardHeader className="text-center self-start text-white text-sm">{data.title}</CardHeader>
				<div
					className={`h-6 w-4 absolute right-0 top-0 ${
						isHovering && !hasMaxChildren ? 'flex items-center z-50' : 'hidden'
					}`}
				>
					<Button
						className="w-full bottom-0 h-full"
						onClick={e => {
							e.stopPropagation();
							addChildNode();
						}}
					>
						+
					</Button>
				</div>
				{!isRoot && <Handle type="target" position={Position.Left} />}
				<Handle type="source" position={Position.Right} isConnectable={!hasMaxChildren} />
			</Card>
		</GraphSheet>
	);
};

export default StoryNode;
