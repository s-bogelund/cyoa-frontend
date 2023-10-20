import React, { FC, useState } from 'react';
import Badge, { BadgeProps } from '../../generics/Badge';
import { PopoverComponent, PopoverTrigger, PopoverContent } from '../../shadcn/ui/popover';

type FilterWrapperProps = {
	isActive?: boolean;
} & BadgeProps;

const FilterWrapper: FC<FilterWrapperProps> = ({ text, className, ...props }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<PopoverComponent>
			<PopoverTrigger>
				<Badge
					variant={isActive ? 'default' : 'outline'}
					className={` ${className}`}
					text="Hello"
				/>
			</PopoverTrigger>
			<PopoverContent sideOffset={-15} alignOffset={25} align="start">
				{props.children || 'No content'}
			</PopoverContent>
		</PopoverComponent>
	);
};

export default FilterWrapper;
