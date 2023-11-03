import React, { ChangeEvent, FC, FormEvent, ReactNode, useEffect, useMemo, useState } from 'react';

import { ExtendedNode, StoryNodeType } from '@/types/graphTypes';

import { Button } from '../shadcn/ui/button';
import { Input } from '../shadcn/ui/input';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetTitle,
	SheetTrigger,
} from '../shadcn/ui/sheet';
import { Textarea } from '../shadcn/ui/textarea';
import { Card } from '../shadcn/ui/card';
import EncounterType from './EncounterType';
import { Label } from '../shadcn/ui/label';
import { Checkbox } from '../shadcn/ui/checkbox';
import AlertDialog from '../generics/AlertDialog';
import SheetChoiceButton from './SheetChoiceButton';
import { Edge, useReactFlow } from 'reactflow';
import useStore from '@/graphStore';
import SheetChoiceItem from './SheetChoiceItem';

type GraphSheetProps = {
	onUpdate: (nodeInfo: StoryNodeType) => void;
	onChildAdded?: () => void;
	nodeInfo: StoryNodeType;
	children: ReactNode;
	hasMaxChildren: boolean;
};

const GraphSheet: FC<GraphSheetProps> = ({
	children,
	nodeInfo,
	onUpdate,
	hasMaxChildren,
	onChildAdded,
}) => {
	const [nodeState, setNodeState] = useState<StoryNodeType>(nodeInfo);
	const [choiceState, setChoiceState] = useState<StoryNodeType[]>([]);
	const [choices, setChoices] = useState<StoryNodeType[]>([]);
	const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);
	const getChildren = useStore(state => state.getAllNeighbours);
	const getEdges = useStore(state => state.getEdgesByNodeId);
	const getNode = useStore(state => state.getNodeById);
	// console.log('neighbours: ', getEdges);
	const { deleteElements } = useReactFlow();
	const handleStoryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNodeState(prev => ({ ...prev, storyText: event.target.value }));
	};

	const saveChanges = () => {
		console.log('Saving changes to node', nodeState);
		onUpdate(nodeState);
	};

	const handleTitleUpdate = (event: FormEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		setNodeState(prev => ({ ...prev, title: newTitle }));
	};

	const handleEncounterUpdate = (encounter: string) => {
		setNodeState(prev => ({ ...prev, encounterType: encounter }));
	};

	const renderChoices = () => {
		const edges = getEdges(nodeState.id);
		if (!edges) return;

		const children = edges.map(edge => {
			return getNode(edge.target);
		});

		if (children.length < 1) return;

		const data: StoryNodeType[] = children.map(child => {
			return child && child.data ? child.data : null;
		});

		// if (edges!.length === 0) return;
		console.log('edges: ', edges);

		const newChoices = data!.map(choice => {
			return (
				<SheetChoiceItem
					nodeId={choice.id}
					key={choice.id}
					choiceText={choice.title}
					onChange={(value: string) => {
						console.log('changed choice', value);
					}}
					onDelete={(id: string) => {
						console.log('deleted choice', id);
					}}
					onGoToSection={(id: string) => {
						console.log('going to section', id);
					}}
				/>
				// <div className="w-full h-12 bg-red-900">noget</div>
			);
		});
		return newChoices;
	};

	const addChoice = () => {
		const newNodeId = `${Number(nodeState.id) + Math.random() * 2}`; // Generate a unique ID for the new node

		console.log('AddChoice called', nodeState);

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
			id: `${nodeState.id}-${newNodeId}`,
			source: nodeState.id,
			target: newNodeId,
		};

		addCustomNode(newNode);
		addCustomEdge(newEdge);
		onChildAdded?.();
	};

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className="flex flex-col gap-9">
				<SheetHeader>
					{isEditingTitle ? (
						<Input
							autoFocus
							value={nodeState.title}
							className="text-2xl font-semibold"
							onBlur={() => {
								setIsEditingTitle(false);
								saveChanges();
							}}
							onInput={event => {
								handleTitleUpdate(event);
							}}
							onKeyDown={event => {
								if (event.key === 'Enter') {
									event.preventDefault();
									setIsEditingTitle(false);
									saveChanges();
								}
							}}
						/>
					) : (
						<SheetTitle onClick={() => setIsEditingTitle(true)} className="text-2xl">
							{nodeState.title}
						</SheetTitle>
					)}
					<SheetDescription className="text-base">
						Her kan du ændre i dette afsnit!
					</SheetDescription>
				</SheetHeader>
				<Card className="flex flex-col justify-start gap-10 ">
					<Textarea
						className="h-48"
						placeholder="Skriv dit historieafsnit her..."
						value={nodeState.storyText}
						onChange={handleStoryTextChange}
						onBlur={saveChanges}
					/>
					<div className="flex flex-col w-full gap-2">
						<Label className="text-xl">Hvad sker der i dette afsnit?</Label>
						<EncounterType
							currentEncounterType={nodeState.encounterType}
							onSelected={encounter => handleEncounterUpdate(encounter)}
						/>
					</div>
					<div className="flex flex-col justify-center gap-2 h-fit w-full">
						<Label className="text-xl">Er dette afsnit et checkpoint?</Label>
						<div className="flex gap-2 items-center">
							<Checkbox
								id="is-checkpoint"
								checked={nodeState.isCheckpoint}
								onClick={() =>
									setNodeState(prev => ({ ...prev, isCheckpoint: !prev.isCheckpoint }))
								}
								className="w-6 h-6"
							/>
							<Label className="text-lg" htmlFor="is-checkpoint">
								Ja
							</Label>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-full">
						{renderChoices()}
						{!hasMaxChildren && <SheetChoiceButton isAddNew onClick={() => addChoice()} />}
					</div>
				</Card>
				<SheetFooter>
					<SheetClose asChild>
						<Button onClick={saveChanges}>GEM</Button>
					</SheetClose>
					<AlertDialog
						title={'Er du sikker på, at du vil slette dette afsnit?'}
						description={'Dette vil være permanent, og kan ikke fortrydes.'}
						cancelText={'Annullér'}
						confirmText={'Fortsæt'}
						onCancel={() => console.log("Don't delete")}
						onConfirm={() => console.log('Delete that shit')}
					>
						<Button variant="destructive" onClick={e => e.stopPropagation}>
							SLET AFSNIT
						</Button>
					</AlertDialog>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default GraphSheet;
