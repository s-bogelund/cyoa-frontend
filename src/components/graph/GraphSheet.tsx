import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';

import { ExtendedNode, StoryNodeType } from '@/types/graphTypes';
import { Label } from '@radix-ui/react-label';

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
import { Checkbox } from '@radix-ui/react-checkbox';

type GraphSheetProps = {
	onUpdate: (nodeInfo: StoryNodeType) => void;
	nodeInfo: StoryNodeType;
	children: ReactNode;
};

const GraphSheet: FC<GraphSheetProps> = ({ children, nodeInfo, onUpdate }) => {
	const [nodeState, setNodeState] = useState<StoryNodeType>(nodeInfo);

	const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

	const handleStoryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNodeState(prev => ({ ...prev, storyText: event.target.value }));
	};

	const handleIsCheckpointChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNodeState(prev => ({ ...prev, isCheckpoint: event.target.checked }));
	};

	const handleSaveChanges = () => {
		console.log('Saving changes to node', nodeState);
		onUpdate(nodeState);
	};

	const handleTitleUpdate = (event: FormEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		setNodeState(prev => ({ ...prev, title: newTitle }));
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
							onBlur={() => setIsEditingTitle(false)}
							onInput={event => handleTitleUpdate(event)}
							onKeyDown={event => {
								if (event.key === 'Enter') {
									event.preventDefault();
									setIsEditingTitle(false);
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
					/>
					<Label>{nodeState.encounterType === 'combat' ? 'Kamp' : 'Samtale'}</Label>
					<Label htmlFor="is-checkpoint">Er dette afsnit et checkpoint?</Label>
					<Checkbox
						id="is-checkpoint"
						checked={nodeState.isCheckpoint}
						// onCheck={handleIsCheckpointChange}
					/>
				</Card>
				<SheetClose asChild>
					<SheetFooter>
						<Button onClick={handleSaveChanges}>Gem Ændringer</Button>
					</SheetFooter>
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default GraphSheet;
