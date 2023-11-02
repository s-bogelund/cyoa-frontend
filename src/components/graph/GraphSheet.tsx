import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';

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

type GraphSheetProps = {
	onUpdate: (nodeInfo: StoryNodeType) => void;
	nodeInfo: StoryNodeType;
	children: ReactNode;
};

const GraphSheet: FC<GraphSheetProps> = ({ children, nodeInfo, onUpdate }) => {
	const [nodeState, setNodeState] = useState<StoryNodeType>(nodeInfo);

	const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

	console.log('nodeState: ', nodeState);

	const handleStoryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNodeState(prev => ({ ...prev, storyText: event.target.value }));
	};

	const handleIsCheckpointChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNodeState(prev => ({ ...prev, isCheckpoint: event.target.checked }));
	};

	const saveChanges = () => {
		console.log('Saving changes to node', nodeState);
		onUpdate(nodeState);
	};

	const handleTitleUpdate = (event: FormEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		setNodeState(prev => ({ ...prev, title: newTitle }));
	};

	const updateOnBlur = () => {
		saveChanges();
	};

	const handleEncounterUpdate = (encounter: string) => {
		setNodeState(prev => ({ ...prev, encounterType: encounter }));
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
								updateOnBlur();
							}}
							onInput={event => {
								handleTitleUpdate(event);
							}}
							onKeyDown={event => {
								if (event.key === 'Enter') {
									event.preventDefault();
									setIsEditingTitle(false);
									updateOnBlur();
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
					<Label className="text-xl">Hvilken type er dette historieafsnit?</Label>
					<EncounterType
						currentEncounterType={nodeState.encounterType}
						onSelected={encounter => handleEncounterUpdate(encounter)}
					/>
					<div className="flex flex-col justify-center gap-6 h-fit w-full">
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
				</Card>
				<SheetClose asChild>
					<SheetFooter>
						<Button onClick={saveChanges}>Gem Ændringer</Button>
					</SheetFooter>
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default GraphSheet;
