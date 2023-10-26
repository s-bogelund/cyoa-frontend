import React, { FC } from 'react';

import getAgeIcon from '@/components/icons/age-icons';
import { getDifficultyIcon, Icons } from '@/components/icons/Icons';
import { Card } from '@/components/shadcn/ui/card';

type ContentItemProps = {
	id: string;
	onClick: (id: string) => void;
} & GameInfo;

const RatingIcon = Icons.Rating;
const TimeIcon = Icons.Playtime;

const ContentItem: FC<ContentItemProps> = ({
	title,
	age,
	rating,
	time,
	difficulty,
	onClick,
	id,
}) => {
	const AgeIcon = getAgeIcon(age);
	const DifficultyIcon = getDifficultyIcon(difficulty, 'w-7 h-7');

	return (
		<Card
			className="grid grid-flow-row grid-cols-list-item border-2 border-slate-700 bg-opacity-60 w-full h-14 gap-1 justify-between px-2 hover:scale-[103%] hover:bg-opacity-[0.02] hover:bg-white transition-transform hover:cursor-pointer shadow-lg"
			onClick={() => onClick(id)}
		>
			<div className="flex justify-start items-center text-2xl">{title}</div>
			<div className="flex justify-center items-center gap-1 text-2xl">
				{rating} <RatingIcon className="text-xl w-6 h-6" />
			</div>
			<div className="flex justify-center items-center gap-1 text-2xl">
				<AgeIcon />
			</div>
			<div className="flex justify-center items-center gap-1 text-2xl">
				<TimeIcon className="w-7 h-7" />
				{time} timer
			</div>
			<div className="flex justify-end items-center text-2xl">
				<DifficultyIcon />
			</div>
		</Card>
	);
};

export default ContentItem;
