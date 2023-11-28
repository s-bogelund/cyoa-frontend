import React, { FC } from 'react';

import getAgeIcon from '../icons/age-icons';
import { Icons } from '../icons/Icons';
import { Card, CardContent } from '../shadcn/ui/card';
import StoryInfoElement from './StoryInfoElement';

type StoryInfoContainerProps = {
	rating?: number;
	difficulty?: string;
	deaths?: number;
	playtime?: number;
	ageRating?: number;		// Is targetAge from story
	nodes?: number;
};

const StoryInfo: FC<StoryInfoContainerProps> = ({
	rating,
	difficulty,
	deaths,
	playtime,
	ageRating,
	nodes,
}) => {
	return (
		<Card className="w-full border-2">
			<CardContent className="grid grid-flow-col grid-cols-3 grid-rows-2 p-6 gap-y-10">
				<StoryInfoElement
					icon={Icons.Rating}
					description="Average rating"
					text={`${rating ? Number(rating.toFixed(1)) : 3 || 3}/5`}
				/>

				<StoryInfoElement
					description="Estimated time to complete"
					icon={Icons.Playtime}
					text={`${playtime ? Number((playtime / 60).toFixed(1)) : 120 / 60 || 3} timer`}
				/>
				<StoryInfoElement
					className="justify-center"
					description="Difficulty"
					icon={Icons.Skull}
					text={`${difficulty}`}
				/>
				<StoryInfoElement
					icon={getAgeIcon(ageRating ? ageRating : 4)}
					description={`Recommended age: ${ageRating || 4}+`}
					isAgeIcon
					className="justify-center"
				/>
				<StoryInfoElement
					icon={Icons.Death}
					description="No of possible deaths"
					className="justify-end"
					text={`${deaths || 0}`}
				/>
				<StoryInfoElement
					description="Total number of story nodes"
					icon={Icons.Nodes}
					className="justify-end"
					text={`${nodes || 0}`}
				/>
			</CardContent>
		</Card>
	);
};

export default StoryInfo;
