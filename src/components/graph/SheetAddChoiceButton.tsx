import React, { FC } from 'react';

import { Button, ButtonProps } from '../shadcn/ui/button';

type SheetChoiceButtonProps = {
	choiceText?: string;
	onClick: () => void;
} & ButtonProps;

const SheetAddChoiceButton: FC<SheetChoiceButtonProps> = ({ choiceText, onClick, ...props }) => {
	return (
		<Button
			{...props}
			className="w-full h-12 p-0 text-lg outline-dashed bg-transparent text-white opacity-80"
			onClick={onClick}
		>
			+ Tilføj nyt valg
		</Button>
	);
};

export default SheetAddChoiceButton;
