import React, { FC } from 'react';
import { Button } from './button';

type OptionButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const OptionButton: FC<OptionButtonProps> = ({ children, className, ...props }) => {
	return (
		<Button
			variant="default"
			className={`text-white h-24 w-24 md:h-32 md:w-36 xl:h-48 xl:w-48 ${className}`}
			{...props}
		>
			{children || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'}
		</Button>
	);
};

export default OptionButton;
