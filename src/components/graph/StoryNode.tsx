import { useApolloClient } from '@apollo/client';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';

import { AddStoryNodePayload } from '@/api/mutations/story-node/addStoryNode';
import { UpdateStoryNodePayload } from '@/api/mutations/story-node/updateStoryNode';
import { GET_STORY_NODE_OPTIONS_QUERY } from '@/api/queries/getStoryNodeOptions';
import useStore from '@/graphStore';
import { StoryNodeType } from '@/types/graphTypes';

import { Icons } from '../icons/Icons';
import { Button } from '../shadcn/ui/button';
import { Card } from '../shadcn/ui/card';
import GraphSheet from './GraphSheet';

export type StoryNodeProps = {
	header?: string;
	isHighlighted?: boolean;
	isSelected?: boolean;
	onClick?: () => void;
	data: StoryNodeType;
	encounterType?: 'combat' | 'conversation' | 'death';
	isRootNode?: boolean;
} & NodeProps;

const QuestionIcon: IconType = Icons.QuestionMark;
const SkullIcon: IconType = Icons.Skull;
const CombatIcon: IconType = Icons.Sword;
const SpeechIcon = Icons.Speech;
const AddIcon = Icons.AddNode;
const EditIcon = Icons.EditNode;

const StoryNode: FC<StoryNodeProps> = ({
	id,
	data: nodeData,
	isRootNode,
	isHighlighted = false,
	dragging = false,
	...rest
}) => {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [hasMaxChildren, setHasMaxChildren] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);

	const { setNodes } = useReactFlow();
	const store = useStore();
	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.currentTarget.value);
	}, []);

	const client = useApolloClient();

	useEffect(() => {
		const options = nodeData.storyNodeOptions;
		console.log('rerendering node');
		if (options && options.length > 3) {
			setHasMaxChildren(true);
		}
	}, [nodeData.storyNodeOptions]);

	const addChildNode = useCallback(async () => {
		if (hasMaxChildren) return;

		const newNode: AddStoryNodePayload = {
			title: 'Ingen titel',
			storyText: '',
			storyId: nodeData.storyId ?? '',
			encounterType: 'other',
			isCheckpoint: false,
		};

		await addCustomNode(newNode, nodeData.id);
		// addCustomEdge(newEdge);
		const { data } = await client.query({
			query: GET_STORY_NODE_OPTIONS_QUERY,
			variables: {
				storyNodeId: nodeData.id,
			},
		});
		console.log('data', data);
		const currentNoOfChildren = store.getEdgesByNodeId(id)?.length || 0;

		if (currentNoOfChildren > 3) {
			console.log('Max children reached');

			setHasMaxChildren(true);
		}

		const newStore = useStore.getState();
		console.log('Added node', newStore);
	}, [hasMaxChildren, nodeData.storyId, nodeData.id, addCustomNode, client, store, id]);

	const updateNodeInStore = (nodeInfo: StoryNodeType) => {
		const mutation: UpdateStoryNodePayload = {
			id: nodeInfo.id,
			title: nodeInfo.title,
			storyText: nodeInfo.storyText,
			encounterType: nodeInfo.encounterType,
			isCheckpoint: nodeInfo.isCheckpoint,
		};
		store.updateStoryNode(mutation);
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

	const decideBgColor = () => {
		switch (nodeData.encounterType) {
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

		switch (nodeData.encounterType) {
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
		<GraphSheet nodeInfo={nodeData} onUpdate={nodeData => updateNodeInStore(nodeData)}>
			<Card
				onChange={onChange}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				className={`relative flex flex-col justify-start items-center p-2 w-32 h-24 text-black border border-white cursor-pointer ${
					isHighlighted ? 'border-2 !shadow-md !shadow-slate-500' : ''
				} ${decideBgColor()}`}
			>
				{decideIcon()}
				<p className="text-center text-sm font-semibold text-white">{nodeData.title}</p>

				<Button
					variant={'default'}
					className={`grid place-content-center w-8 h-8 absolute right-0 bottom-0 text-2xl bg-transparent betterhover:hover:bg-opacity-30 betterhover:hover:bg-gray-500 text-white p-1 opacity-60 ${
						hasMaxChildren ? 'hidden' : '' || isHovering ? 'opacity-100' : 'opacity-50'
					}`}
					onClick={e => {
						e.stopPropagation();
						addChildNode();
					}}
				>
					<AddIcon />
				</Button>

				<Button
					variant={'default'}
					className={`grid place-content-center w-8 h-8 absolute left-0 bottom-0 text-2xl bg-transparent betterhover:hover:bg-opacity-30 betterhover:hover:bg-gray-500 text-white p-1 ${
						isHovering ? 'opacity-100' : 'opacity-50'
					}`}
				>
					<EditIcon />
				</Button>
				{!isRootNode && <Handle type="target" position={Position.Left} />}
				<Handle type="source" position={Position.Right} isConnectable={!hasMaxChildren} />
			</Card>
		</GraphSheet>
	);
};

export default StoryNode;
