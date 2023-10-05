import React, { FC, useState } from 'react';

import { Button } from '@/components/shadcn/ui/button';
import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card';
import StoryDescription from '@/components/story-homepage/StoryDescription';
import StoryInfo from '@/components/story-homepage/StoryInfoContainer';

// TODO: Should probably not be prop - should receive from backend/slug
// TODO: Should check whether the story has already been started/completed by the user and display accordingly
type StoryPageProps = {
	title?: string;
};

const openStoryInNewTab = () => {
	window.open('/node', '_blank');
};

const StoryPage: FC<StoryPageProps> = ({ title }) => {
	const [hasStarted, setHasStarted] = useState(false);

	return (
		<Card className="flex flex-col w-full h-full mt-8 gap-10 items-center md:w-[80%] lg:w-[65%] xl:w-[50%]">
			<Card className="flex flex-col w-full h-fit items-center gap-5">
				<CardTitle className="text-4xl">{title || 'Story Name'}</CardTitle>
				<CardContent className="flex flex-col w-full h-full gap-5 items-center p-0">
					<StoryInfo {...dummy} />
				</CardContent>
			</Card>
			<Card className="flex flex-col w-full h-fit items-center gap-5 mb-10">
				<CardContent className="flex flex-col w-full h-full gap-5 items-center p-0">
					<StoryDescription />
				</CardContent>
			</Card>
			{!hasStarted ? (
				<Button
					className="w-full h-fit"
					onClick={() => {
						setHasStarted(true);
						// openStoryInNewTab();
					}}
				>
					Start Historien!
				</Button>
			) : (
				<Button className="w-full h-fit" onClick={() => setHasStarted(false)}>
					Fortsæt historie
				</Button>
			)}
		</Card>
	);
};

const dummy = {
	rating: 4.5,
	difficulty: 3,
	deaths: 10,
	playtime: 4,
	ageRating: 12,
	nodes: 210,
};

export default StoryPage;
