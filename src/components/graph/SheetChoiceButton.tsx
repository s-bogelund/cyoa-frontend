import React, { FC } from 'react';
import { Button, ButtonProps } from '../shadcn/ui/button';

type SheetChoiceButtonProps = {
	choiceText?: string;
	isAddNew?: boolean;
	onClick: () => void;
} & ButtonProps;

const SheetChoiceButton: FC<SheetChoiceButtonProps> = ({
	choiceText,
	onClick,
	isAddNew = false,
	...props
}) => {
	return (
		<>
			{!isAddNew ? (
				<Button {...props} className="w-full" onClick={onClick}>
					{choiceText || 'Ingen tekst'}
				</Button>
			) : (
				<Button
					{...props}
					className="w-full outline-dashed bg-transparent text-white opacity-60"
					onClick={onClick}
				>
					+ Tilføj nyt valg
				</Button>
			)}
		</>
	);
};

export default SheetChoiceButton;
