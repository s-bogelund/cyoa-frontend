import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card';
import StoryDescription from '@/components/story-homepage/StoryDescription';
import StoryInfoContainer from '@/components/story-homepage/StoryInfoContainer';
import React, { FC } from 'react';

type StoryPageProps = {};

const StoryPage: FC<StoryPageProps> = ({}) => {
	return (
		<Card className="flex flex-col w-[95%] h-full mt-8 gap-5 items-center md:w-[80%] lg:w-[65%] xl:w-[50%]">
			<CardTitle>Story Name</CardTitle>
			<CardContent className="flex flex-col w-full h-full gap-5 items-center">
				<StoryInfoContainer />
				<StoryDescription />
			</CardContent>
		</Card>
	);
};

export default StoryPage;
