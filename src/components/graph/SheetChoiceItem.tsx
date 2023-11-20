import React, { FC } from 'react';
import { Input } from '../shadcn/ui/input';
import { Card } from '../shadcn/ui/card';
import { Icons } from '../icons/Icons';
import { IconType } from 'react-icons';
import { PopoverComponent, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover';
import Badge from '../generics/Badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '../shadcn/ui/dropdown-menu';
import { Button } from '../shadcn/ui/button';

type SheetChoiceItemPropsProps = {
	choiceText?: string;
	onChange: (value: string) => void;
	onDelete: (id: string) => void;
	onGoToSection: (id: string) => void;
	justCreated?: boolean;
	nodeId: string;
};

const MenuIcon: IconType = Icons.MenuDots;

const SheetChoiceItemProps: FC<SheetChoiceItemPropsProps> = ({
	choiceText,
	onChange,
	nodeId,
	onDelete,
	onGoToSection,
	justCreated,
}) => {
	const [value, setValue] = React.useState<string>(choiceText || '');
	const [isFocused, setIsFocused] = React.useState<boolean>(false);

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
				/>
			) : (
				<Card
					className="grid grid-flow-row px-4 grid-cols-[85%,auto] w-full h-full border-2 border-white items-center justify-between"
					onClick={() => setIsFocused(true)}
				>
					<div className="w-[85%]">
						{choiceText === 'New Node' ? 'Hvad vælger karakteren?' : choiceText}
					</div>
					<div>
						<ItemMenu
							onGoToSection={() => onGoToSection(nodeId)}
							onDelete={() => onDelete(nodeId)}
						/>
					</div>
				</Card>
			)}
		</div>
	);
};

export default SheetChoiceItemProps;

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
