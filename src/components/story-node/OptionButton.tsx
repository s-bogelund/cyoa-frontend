import React, { FC } from 'react';

import { Button } from '../shadcn/ui/button';

type OptionButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const OptionButton: FC<OptionButtonProps> = ({ children, className, ...props }) => {
	return (
		<Button variant="default" className={`text-card-foreground h-32 ${className}`} {...props}>
			{children || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'}
		</Button>
	);
};

export default OptionButton;
