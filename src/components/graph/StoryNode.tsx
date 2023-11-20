import { Label } from '@radix-ui/react-label';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { Edge, Handle, Node, NodeProps, NodeTypes, Position, useReactFlow } from 'reactflow';

import useStore from '@/graphStore';
import { ExtendedNode, StoryNodeType } from '@/types/graphTypes';
import { toNodeChange } from '@/utils/graph';

import { Button } from '../shadcn/ui/button';
import { Card, CardHeader } from '../shadcn/ui/card';
import { Input } from '../shadcn/ui/input';
import GraphSheet from './GraphSheet';
import { IconType } from 'react-icons';
import { Icons } from '../icons/Icons';

export type StoryNodeProps = {
	header?: string;
	isHighlighted?: boolean;
	isSelected?: boolean;
	onClick?: () => void;
	encounterType?: 'combat' | 'conversation' | 'death';
	isRoot?: boolean;
} & NodeProps;

const QuestionIcon: IconType = Icons.QuestionMark;
const SkullIcon: IconType = Icons.Skull;
const CombatIcon: IconType = Icons.Sword;
const SpeechIcon = Icons.Speech;

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

	console.log('Node data', data);

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

	const checkNoOfChildren = () => {
		const currentNoOfChildren = store.getEdgesByNodeId(id)?.length || 0;
		if (currentNoOfChildren >= 4) {
			setHasMaxChildren(true);
		} else {
			setHasMaxChildren(false);
		}
	};

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
		store.saveGraphState();
	};

	const decideBgColor = () => {
		switch (data.encounterType) {
			case 'combat':
				return 'bg-red-800 bg-opacity-70';
			case 'conversation':
				return 'bg-blue-800 bg-opacity-70';
			case 'death':
				return 'bg-black';
			default:
				return 'bg-gray-700';
		}
	};

	const decideIcon = () => {
		const style = 'absolute w-[60%] h-[60%] bottom-1 object-center text-white opacity-50';

		switch (data.encounterType) {
			case 'combat':
				return <CombatIcon className={style} />;
			case 'conversation':
				return <SpeechIcon className={style} />;
			case 'death':
				return <SkullIcon className={style} />;
			default:
				return <QuestionIcon className={style} />;
		}
	};

	return (
		<GraphSheet
			hasMaxChildren={hasMaxChildren}
			nodeInfo={data}
			onUpdate={nodeInfo => updateNodeInStore(nodeInfo)}
			onChildAdded={() => checkNoOfChildren()}
		>
			<Card
				onChange={onChange}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => setIsHovering(false)}
				className={`relative flex flex-col justify-start items-center p-2 w-32 h-24 text-black border border-white cursor-pointer ${
					isHighlighted ? 'border-2 !shadow-md !shadow-slate-500' : ''
				} ${decideBgColor()}`}
			>
				{decideIcon()}
				<p className="text-center text-sm font-semibold text-white">{data.title}</p>

				<Button
					variant={'ghost'}
					className={`w-8 h-8 absolute right-0 bottom-1 text-3xl hover:bg-opacity-40 text-white ${
						hasMaxChildren ? 'hidden' : ''
					}`}
					onClick={e => {
						e.stopPropagation();
						addChildNode();
					}}
				>
					+
				</Button>
				{!isRoot && <Handle type="target" position={Position.Left} />}
				<Handle type="source" position={Position.Right} isConnectable={!hasMaxChildren} />
			</Card>
		</GraphSheet>
	);
};

export default StoryNode;
