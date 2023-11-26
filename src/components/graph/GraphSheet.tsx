import { Search } from 'lucide-react';
import React, { ChangeEvent, FC, FormEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { Edge, useReactFlow } from 'reactflow';

import useStore from '@/graphStore';
import { ExtendedNode, StoryNodeType } from '@/types/graphTypes';

import AlertDialog from '../generics/AlertDialog';
import { Icons } from '../icons/Icons';
import { Button } from '../shadcn/ui/button';
import { Card } from '../shadcn/ui/card';
import { Checkbox } from '../shadcn/ui/checkbox';
import { Input } from '../shadcn/ui/input';
import { Label } from '../shadcn/ui/label';
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
import EncounterType from './EncounterType';
import SheetAddChoiceButton from './SheetAddChoiceButton';
import SheetChoiceItem from './SheetChoiceItem';

const EditIcon = Icons.EditNode;

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
	const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
	const addCustomNode = useStore(state => state.addCustomNode);
	const addCustomEdge = useStore(state => state.addCustomEdge);
	const getEdges = useStore(state => state.getEdgesByNodeId);
	const getNode = useStore(state => state.getNodeById);
	const [reRender, setRerender] = useState<boolean>(false);
	// console.log('neighbours: ', getEdges);
	const handleStoryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNodeState(prev => ({ ...prev, storyText: event.target.value }));
	};

	const saveChanges = () => {
		console.log('Saving changes to node', nodeState);
		onUpdate(nodeState);
		setRerender(prev => !prev);
	};

	const handleTitleUpdate = (event: FormEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		setNodeState(prev => ({ ...prev, title: newTitle }));
	};

	const handleEncounterUpdate = (encounter: string) => {
		const newNodeState = { ...nodeState, encounterType: encounter };
		setNodeState(newNodeState);
		saveChanges();
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
		// console.log('edges: ', edges);

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
				title: 'Nyt Afsnit',
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
			<SheetContent className="flex flex-col gap-9 pt-16 !w-full">
				<SheetHeader className="!w-full">
					<Card className="flex flex-row !w-full">
						{isEditingTitle ? (
							<Input
								autoFocus
								value={nodeState.title}
								className="text-4xl !h-14 py-0 my-[4px] font-semibold w-full rounded-r-none"
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
								id="title-input"
							/>
						) : (
							<SheetTitle onClick={() => setIsEditingTitle(true)} className="text-4xl w-full">
								<Card className="border-[4px] p-2 !w-full rounded-r-none mr-[-16px]">
									{nodeState.title}
								</Card>
							</SheetTitle>
						)}
						<Label htmlFor="title-input">
							<div
								className="flex justify-center items-center rounded-md rounded-l-none bg-slate-700 bg-opacity-50 h-16 w-16 text-4xl"
								onClick={() => setIsEditingTitle(true)}
							>
								{/* <Search width="42px" height="80px" /> */}
								<EditIcon className="w-10 h-full" />
							</div>
						</Label>
					</Card>
				</SheetHeader>
				<Card className="flex flex-col justify-start gap-10 ">
					<Textarea
						className="h-48 text-lg"
						placeholder="Skriv dit historieafsnit her..."
						value={nodeState.storyText}
						onChange={handleStoryTextChange}
						onBlur={saveChanges}
					/>
					<div className="flex flex-col w-full gap-2">
						<Label className="text-xl">Hvilken type er det her afsnit?</Label>
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
					<div className="flex flex-col gap-4 w-full">
						{renderChoices()}
						{!hasMaxChildren && <SheetAddChoiceButton onClick={() => addChoice()} />}
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
