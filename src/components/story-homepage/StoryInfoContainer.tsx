import React, { FC } from 'react';

import getAgeIcon from '../icons/age-icons';
import { Icons } from '../icons/Icons';
import { Card, CardContent } from '../shadcn/ui/card';
import StoryInfoElement from './StoryInfoElement';

type StoryInfoContainerProps = {
	rating?: number;
	difficulty?: number;
	deaths?: number;
	playtime?: number;
	ageRating?: number;
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
					text={`${rating || 3}/5`}
				/>

				<StoryInfoElement
					description="Estimated time to complete"
					icon={Icons.Playtime}
					text={`${playtime || 3} hours`}
				/>
				<StoryInfoElement
					className="justify-center"
					description="Difficulty"
					icon={Icons.Skull}
					text={`${difficulty || 4}/5`}
				/>
				<StoryInfoElement
					icon={getAgeIcon(ageRating ? ageRating : 4)}
					description={`Recommended age: ${ageRating || 6}+`}
					isAgeIcon
					className="justify-center"
				/>
				<StoryInfoElement
					icon={Icons.Death}
					description="No of possible deaths"
					className="justify-end"
					text={`${deaths || 7}`}
				/>
				<StoryInfoElement
					description="Total number of story nodes"
					icon={Icons.Nodes}
					className="justify-end"
					text={`${nodes || 130}`}
				/>
			</CardContent>
		</Card>
	);
};

export default StoryInfo;
