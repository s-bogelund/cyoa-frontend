import React, { FC, useState } from 'react';
import Badge, { BadgeProps } from '../../generics/Badge';
import { PopoverComponent, PopoverTrigger, PopoverContent } from '../../shadcn/ui/popover';

type FilterWrapperProps = {
	isActive?: boolean;
	text?: string;
	alignOffset?: number;
	sideOffset?: number;
} & BadgeProps;

const FilterWrapper: FC<FilterWrapperProps> = ({
	text,
	className,
	alignOffset,
	sideOffset,
	...props
}) => {
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
			<PopoverContent
				sideOffset={sideOffset || -10}
				alignOffset={alignOffset || 65}
				align="start"
				className="w-fit h-fit"
			>
				{props.children || 'No content'}
			</PopoverContent>
		</PopoverComponent>
	);
};

export default FilterWrapper;
