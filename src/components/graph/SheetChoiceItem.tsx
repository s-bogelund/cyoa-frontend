import React, { FC } from 'react';
import { IconType } from 'react-icons';

import { Icons } from '../icons/Icons';
import { Button } from '../shadcn/ui/button';
import { Card } from '../shadcn/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import { Input } from '../shadcn/ui/input';
import Tooltip from '../generics/Tooltip';

type SheetChoiceItemProps = {
	choiceText?: string;
	destinationNode?: string;
	onChange: (value: string) => void;
	onDelete: (id: string) => void;
	onGoToSection: (id: string) => void;
	destinationNodeTitle?: string;
	justCreated?: boolean;
	nodeId: string;
};

const MenuIcon: IconType = Icons.MenuDots;

const SheetChoiceItem: FC<SheetChoiceItemProps> = ({
	choiceText,
	onChange,
	nodeId,
	onDelete,
	onGoToSection,
	destinationNodeTitle,
	destinationNode,
}) => {
	const [value, setValue] = React.useState<string>(choiceText || '');
	const [isFocused, setIsFocused] = React.useState<boolean>(false);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setIsFocused(false);
			onChange(value);
		}
	};

	return (
		<div className="h-14">
			{isFocused ? (
				<Input
					className="h-full"
					value={value}
					onInput={e => setValue(e.currentTarget.value)}
					autoFocus
					onBlur={() => {
						setIsFocused(false);

						onChange(value);
					}}
					placeholder="Hvad vælger karakteren?"
					onKeyDown={handleKeyDown}
				/>
			) : (
				<Tooltip text={'Går til afsnit: ' + destinationNodeTitle || 'Ingen titel'}>
					<Card
						className="grid grid-flow-row px-4 grid-cols-[85%,auto] w-full h-full border-2 border-white items-center justify-between cursor-pointer hover:bg-slate-500 hover:bg-opacity-20"
						onClick={() => setIsFocused(true)}
					>
						<div className="w-[85%]">
							{choiceText?.toLowerCase() === 'ingen titel' || ''
								? 'Hvad vælger karakteren?'
								: choiceText}
						</div>
						<div>
							<ItemMenu
								onGoToSection={() => onGoToSection(nodeId)}
								onDelete={() => onDelete(nodeId)}
							/>
						</div>
					</Card>
				</Tooltip>
			)}
		</div>
	);
};

export default SheetChoiceItem;

type ItemMenuProps = {
	onGoToSection: () => void;
	onDelete: () => void;
};

const ItemMenu: FC<ItemMenuProps> = ({ onGoToSection, onDelete }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} className="w-6 p-0 !hover:bg-transparent ">
					<MenuIcon className="z-10 w-full h-6 cursor-pointer" onClick={e => e.stopPropagation} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
							e.stopPropagation();
							onGoToSection();
						}}
					>
						Gå til Afsnit
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
							e.stopPropagation();
							onDelete();
						}}
					>
						Slet
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
