import React, { FC, useState } from 'react';
import Badge, { BadgeProps } from '../../generics/Badge';
import { PopoverComponent, PopoverTrigger, PopoverContent } from '../../shadcn/ui/popover';

type FilterWrapperProps = {
	isActive?: boolean;
	text?: string;
} & BadgeProps;

const FilterWrapper: FC<FilterWrapperProps> = ({ text, className, ...props }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<PopoverComponent>
			<PopoverTrigger>
				<Badge
					variant={isActive ? 'default' : 'outline'}
					className={`h-8 ${className}`}
					text={text}
				/>
			</PopoverTrigger>
			<PopoverContent sideOffset={-10} alignOffset={65} align="start">
				{props.children || 'No content'}
			</PopoverContent>
		</PopoverComponent>
	);
};

export default FilterWrapper;
