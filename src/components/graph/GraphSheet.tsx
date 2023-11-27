import { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';

import { AddStoryNodePayload } from '@/api/mutations/story-node/addStoryNode';
import { UpdateStoryNodeOptionPayload } from '@/api/mutations/story-node-option/updateStoryNodeOptions';
import useStore from '@/graphStore';
import { StoryNodeType } from '@/types/graphTypes';

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
	SheetFooter,
	SheetHeader,
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
	nodeInfo: StoryNodeType;
	children: ReactNode;
};

const GraphSheet: FC<GraphSheetProps> = ({ children, nodeInfo, onUpdate }) => {
	const [nodeState, setNodeState] = useState<StoryNodeType>(nodeInfo);
	const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const { updateStoryNodeOption } = useStore();
	const addCustomNode = useStore(state => state.addCustomNode);
	const getEdges = useStore(state => state.getEdgesByNodeId);
	const getNode = useStore(state => state.getNodeById);
	const handleStoryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNodeState(prev => ({ ...prev, storyText: event.target.value }));

		// Clear existing timeout to reset the delay
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		// Set a new timeout
		const newTimeoutId = setTimeout(() => {
			saveChanges(nodeState);
		}, 4000);

		setTimeoutId(newTimeoutId);
	};

	const handleChoiceUpdate = (choiceId: string, newText: string) => {
		// Update the specific choice in the nodeState

		setNodeState(prevState => {
			const updatedOptions = prevState.storyNodeOptions?.map(choice => {
				if (choice.id === choiceId) {
					// Update the specific choice
					return { ...choice, optionText: newText };
				}
				return choice;
			});

			return { ...prevState, storyNodeOptions: updatedOptions };
		});

		const option = nodeState.storyNodeOptions?.find(option => option.id === choiceId);

		const mutation: UpdateStoryNodeOptionPayload = {
			id: choiceId,
			destinationNode: option?.destinationNode ?? '',
			optionText: newText,
		};

		updateStoryNodeOption(mutation);
	};

	const saveChanges = (storyNode: StoryNodeType) => {
		onUpdate(storyNode);
	};

	const handleTitleUpdate = (event: FormEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		const newNodeState = { ...nodeState, title: newTitle };
		setNodeState(newNodeState);

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		// Set a new timeout
		const newTimeoutId = setTimeout(() => {
			saveChanges(newNodeState);
		}, 5000); // Delay of 1 second

		setTimeoutId(newTimeoutId);
	};

	const handleEncounterUpdate = (encounter: string) => {
		const newNodeState = { ...nodeState, encounterType: encounter };
		setNodeState(newNodeState);
		saveChanges(newNodeState);
	};

	const renderChoices = () => {
		const newOptions = nodeState.storyNodeOptions?.map(choice => {
			return (
				<SheetChoiceItem
					nodeId={choice.id}
					key={choice.id}
					choiceText={choice.optionText}
					onChange={(newText: string) => handleChoiceUpdate(choice.id, newText)}
					onDelete={(id: string) => {
						console.log('deleted choice', id);
					}}
					onGoToSection={(id: string) => {
						console.log('going to section', id);
					}}
				/>
			);
		});
		// if (newOptions?.length! > 3) setHasMaxChildren(true);
		return newOptions;
	};

	const addChoice = async () => {
		const edges = getEdges(nodeState.id);
		console.log('edges', edges);
		console.log('AddChoice called', nodeState);

		const newNode: AddStoryNodePayload = {
			title: 'Ingen titel',
			storyText: '',
			storyId: nodeState.storyId!,
			encounterType: 'other',
			isCheckpoint: false,
		};

		await addCustomNode(newNode, nodeInfo.id);
		const test = getNode(nodeInfo.id);
		console.log('test', test);
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
								className={`!h-14 py-0 my-[4px] font-semibold w-full rounded-r-none ${
									nodeState.title.length > 18 ? 'text-3xl' : 'text-4xl'
								}`}
								onBlur={() => {
									setIsEditingTitle(false);
									saveChanges(nodeState);
								}}
								onInput={event => {
									handleTitleUpdate(event);
								}}
								onKeyDown={event => {
									if (event.key === 'Enter') {
										event.preventDefault();
										setIsEditingTitle(false);
										saveChanges(nodeState);
									}
								}}
								id="title-input"
							/>
						) : (
							<SheetTitle
								onClick={() => setIsEditingTitle(true)}
								className={`w-full ${nodeState.title.length > 18 ? 'text-3xl' : 'text-4xl'}`}
							>
								<Card
									className={`h-full flex items-center border-[4px] p-2 py-0 !w-full rounded-r-none mr-[-16px] ${
										nodeState.title.length < 1 || nodeState.title.length > 18 ? '!h-16' : ''
									}`}
								>
									{nodeState.title}
								</Card>
							</SheetTitle>
						)}
						<Label htmlFor="title-input">
							<div
								className="flex justify-center items-center rounded-md rounded-l-none bg-slate-700 bg-opacity-50 h-16 w-16 text-4xl"
								onClick={() => setIsEditingTitle(true)}
							>
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
						onBlur={() => saveChanges(nodeState)}
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
						{(nodeInfo.storyNodeOptions && nodeInfo.storyNodeOptions?.length > 3) || (
							<SheetAddChoiceButton onClick={() => addChoice()} />
						)}
					</div>
				</Card>
				<SheetFooter>
					<SheetClose asChild>
						<Button onClick={() => console.log("This doesn't do anything really")}>GEM</Button>
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
