import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card';
import { Icons } from '../icons/Icons';
import StoryInfoElement from './StoryInfoElement';

type StoryInfoContainerProps = {};

const StoryInfoContainer: FC<StoryInfoContainerProps> = ({}) => {
	return (
		<Card className="w-full border-2">
			<CardContent className="grid grid-flow-col grid-cols-3 grid-rows-2 p-6 gap-y-10">
				<StoryInfoElement icon={Icons.rating} description="Rating" text="3.3" />

				<StoryInfoElement icon={Icons.rating} text="3.3" />
				<StoryInfoElement
					className="justify-center"
					description="Difficulty"
					icon={Icons.skull}
					text="3.3"
				/>
				<StoryInfoElement icon={Icons.rating} className="justify-center" text="3.3" />
				<StoryInfoElement icon={Icons.rating} className="justify-end" text="3.3" />
				<StoryInfoElement icon={Icons.rating} className="justify-end" text="3.3" />
			</CardContent>
		</Card>
	);
};

export default StoryInfoContainer;
