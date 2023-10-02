import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import { Icons } from '../icons/Icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

type StoryInfoElementProps = {
	icon: IconType;
	text: string;
	className?: string;
	description?: string;
};

const StoryInfoElement: FC<StoryInfoElementProps> = ({
	icon: Icon,
	text,
	className,
	description,
}) => {
	return (
		<div className={cn('flex items-center gap-0.5 md:gap-2', className)}>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className={cn('flex items-center gap-0.5 md:gap-2')}>
						<Icon className="h-7 w-7" />
						<p className="text-center text-xl">{text}</p>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>{description || ''}</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
};

export default StoryInfoElement;
