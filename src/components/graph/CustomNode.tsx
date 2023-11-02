import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { Edge, Handle, Node, NodeProps, NodeTypes, Position } from 'reactflow';

import useStore from '@/graphStore';

import Tooltip from '../generics/Tooltip';
import { Button } from '../shadcn/ui/button';
import { Card, CardHeader } from '../shadcn/ui/card';

type BasicStoryNodeProps = {
	header?: string;
	isHighlighted?: boolean;
	isSelected?: boolean;
	onClick?: () => void;
	encounterType?: 'combat' | 'conversation' | 'death';
	isRoot?: boolean;
} & NodeProps;

const BasicStoryNode: FC<BasicStoryNodeProps> = ({
	id,
	data,
	isRoot,
	isHighlighted = false,
	dragging = false,
	...props
}) => {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [hasMaxChildren, setHasMaxChildren] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);
	const store = useStore.getState();
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.currentTarget.value);
	}, []);

	const addChildNode = useCallback(() => {
		if (hasMaxChildren) return;

		const newNodeId = `${Number(id) + Math.random() * 2}`; // Generate a unique ID for the new node
		const newNode: Node = {
			id: newNodeId,
			type: 'testNode', // replace with your actual type
			data: { label: 'New Node' },
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

	return (
		<Card
			onChange={onChange}
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => setIsHovering(false)}
			className={`relative flex flex-col items-start p-2 w-32 h-24 text-black border border-white cursor-pointer ${
				isHighlighted ? 'border-2 !shadow-md !shadow-slate-500' : ''
			}`}
		>
			<CardHeader className="text-center self-start text-white text-sm">{data.label}</CardHeader>
			<div
				className={`h-6 w-4 absolute right-0 top-0 ${
					isHovering && !hasMaxChildren ? 'flex items-center z-50' : 'hidden'
				}`}
			>
				<Button className="w-full bottom-0 h-full" onClick={() => addChildNode()}>
					+
				</Button>
			</div>
			{!isRoot && <Handle type="target" position={Position.Left} />}
			<Handle type="source" position={Position.Right} isConnectable={!hasMaxChildren} />
		</Card>
	);
};

export default BasicStoryNode;
