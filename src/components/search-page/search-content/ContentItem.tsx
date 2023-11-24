import React, { FC, useEffect, useMemo, useState } from 'react';

import Tooltip from '@/components/generics/Tooltip';
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
	targetAge,
	rating,
	completionTime,
	difficulty,
	onClick,
	id,
}) => {
	const AgeIcon = getAgeIcon(targetAge);
	const DifficultyIcon = getDifficultyIcon(difficulty, 'w-7 h-7');
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

	const textSize = 'md:text-lg  lg:text-xl xl:text-2xl';

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const truncateTitle = () => {
		return title.length > titleMaxLength ? title.slice(0, titleMaxLength - 3) + '...' : title;
	};

	const titleMaxLength = useMemo(() => {
		if (screenWidth < 512) return 45; // Tailwind's xs breakpoint
		if (screenWidth < 640) return 30; // Tailwind's sm breakpoint
		if (screenWidth < 768) return 43; // Tailwind's lg breakpoint
		return 33; // Tailwind's xl and above
	}, [screenWidth]);

	return (
		<Card
			className="grid grid-flow-row grid-cols-list-item-mobile md:grid-cols-list-item border-2 border-slate-700 bg-opacity-60 w-full h-14 gap-1 justify-between px-2 betterhover:hover:scale-[103%] hover:bg-opacity-[0.02] hover:bg-white transition-transform hover:cursor-pointer xl:shadow-2xl lg:shadow-lg"
			onClick={() => onClick(id)}
		>
			{title.length > titleMaxLength ? (
				<Tooltip text={title}>
					<div className={`flex justify-start items-center ${textSize}`}>{truncateTitle()}</div>
				</Tooltip>
			) : (
				<div className={`flex justify-start items-center ${textSize}`}>{title}</div>
			)}
			<Tooltip text={`Bruger har givet denne historie ${rating}/5 stjerner`}>
				<div className={`flex justify-center items-center gap-1 ${textSize}`}>
					<p className="pb-0.5">{rating}</p>
					<RatingIcon className="text-xl w-5 h-5  lg:w-6 lg:h-6" />
				</div>
			</Tooltip>
			<Tooltip text={`Anbefalet alder: ${targetAge}+`}>
				<div className={`flex justify-center items-center gap-1 ${textSize}`}>
					<AgeIcon />
				</div>
			</Tooltip>
			<Tooltip text={`Tager ca. ${Number((completionTime / 60).toFixed(1))} timer at gennemføre`}>
				<div className={`hidden md:flex justify-left items-center gap-1 ${textSize}`}>
					<TimeIcon className="w-7 h-7" />
					{Number((completionTime / 60).toFixed(0))} timer
				</div>
			</Tooltip>
			<Tooltip text={`Sværhedsgrad: ${difficulty}/3`}>
				<div className={`flex justify-end items-center gap-1 ${textSize}`}>
					<DifficultyIcon />
				</div>
			</Tooltip>
		</Card>
	);
};

export default ContentItem;
