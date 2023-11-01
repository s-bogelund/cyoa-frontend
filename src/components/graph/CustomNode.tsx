import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { Handle, Position, Node, NodeTypes, NodeProps, Edge } from 'reactflow';
import { Card, CardHeader } from '../shadcn/ui/card';
import Tooltip from '../generics/Tooltip';
import { Button } from '../shadcn/ui/button';
import useStore from '@/graphStore';

type BasicStoryNodeProps = {
	header?: string;
	onClick?: () => void;
} & NodeProps;

const BasicStoryNode: FC<BasicStoryNodeProps> = ({ id, data, dragging = false, ...props }) => {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);

	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.currentTarget.value);
	}, []);

	const addChildNode = useCallback(() => {
		const newNodeId = `test ${Math.random() * 2}`; // Generate a unique ID for the new node
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

		const newStore = useStore.getState();
		console.log('Added node', newStore);
	}, [id, addCustomNode, addCustomEdge]);

	return (
		<>
			<Tooltip text="This is a test">
				<Card
					onChange={onChange}
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					className="relative flex flex-col items-start p-2 w-32 h-24 text-black border border-white"
				>
					<CardHeader className="text-center self-start text-white text-sm ">
						{data.label}
					</CardHeader>
					<div
						className={`w-full h-8 absolute left-0 bottom-[-1rem] ${
							isHovering ? 'flex justify-center z-50' : 'hidden'
						}`}
					>
						<Button className="h-full bottom-0 w-[30%]" onClick={() => addChildNode()}>
							+
						</Button>
					</div>
					<Handle type="target" position={Position.Left} />
					<Handle type="source" position={Position.Right} />
				</Card>
			</Tooltip>
		</>
	);
};

export default BasicStoryNode;
