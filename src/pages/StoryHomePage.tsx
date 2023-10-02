import React, { FC } from 'react';

import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card';
import StoryDescription from '@/components/story-homepage/StoryDescription';
import StoryInfo from '@/components/story-homepage/StoryInfoContainer';

// TODO: Should probably not be prop - should receive from backend/slug
type StoryPageProps = {
	title?: string;
};

const StoryPage: FC<StoryPageProps> = ({ title }) => {
	return (
		<Card className="flex flex-col w-full h-full mt-8 gap-5 items-center md:w-[80%] lg:w-[65%] xl:w-[50%]">
			<CardTitle>{title || 'Story Name'}</CardTitle>
			<CardContent className="flex flex-col w-full h-full gap-5 items-center">
				<StoryInfo {...dummy} />
				<StoryDescription />
			</CardContent>
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
