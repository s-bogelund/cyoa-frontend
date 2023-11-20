import React, { FC } from 'react';

import { BadgeComponent, BadgeComponentProps } from '../shadcn/ui/badge';

export type BadgeProps = {
	text?: string;
} & BadgeComponentProps;

const Badge: FC<BadgeProps> = ({ text, className, ...props }) => {
	return (
		<BadgeComponent
			className={`grid place-content-center cursor-pointer active:scale-95 ${className}`}
			{...props}
		>
			<>
				<div>{text}</div>
				{props.children}
			</>
		</BadgeComponent>
	);
};

export default Badge;
