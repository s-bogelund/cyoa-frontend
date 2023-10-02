import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import { Icons } from '../icons/Icons';
import Tooltip from '../generics/Tooltip';

type StoryInfoElementProps = {
	icon: IconType;
	text?: string;
	className?: string;
	isAgeIcon?: boolean;
	description?: string;
};

const StoryInfoElement: FC<StoryInfoElementProps> = ({
	icon: Icon = Icons.rating,
	text,
	className,
	isAgeIcon,
	description,
}) => {
	return (
		<div className={cn('flex items-center gap-0.5 md:gap-2', className)}>
			{description ? (
				<Tooltip text={description || ''}>
					<div className={cn('flex items-center gap-0.5 md:gap-2')}>
						<Icon className={isAgeIcon ? 'h-8 w-8' : 'h-7 w-7'} />
						<p className="text-center text-xl">{text}</p>
					</div>
				</Tooltip>
			) : (
				<div className={cn('flex items-center gap-0.5 md:gap-2')}>
					<Icon className="h-7 w-7" />
					<p className="text-center text-xl">{text}</p>
				</div>
			)}
		</div>
	);
};

export default StoryInfoElement;
