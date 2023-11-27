import { useQuery } from '@apollo/client';
import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import GET_STORY_FOR_STORY_PAGE, { GetStoryForStoryPageQueryResult } from '@/api/queries/getStoryForStoryPage';
import { Button } from '@/components/shadcn/ui/button';
import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card';
import StoryDescription from '@/components/story-homepage/StoryDescription';
import StoryInfo from '@/components/story-homepage/StoryInfoContainer';
import { Story } from '@/gql/graphql';

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
	const [searchParams, setSearchParams] = useSearchParams();

	const {loading, error, data} = useQuery<GetStoryForStoryPageQueryResult>(
		GET_STORY_FOR_STORY_PAGE,
		{variables: { idInput: searchParams.get('storyId')}}
	);
	
	if (loading) {
		console.log("loading", loading)
		return <p>Loading...</p>;
	} 
	if (error) {
		console.log("error", error)
		return <p>Error: {error?.message}</p>;
	}
	if (data) {
		const story: Story = data.stories[0];

		const ratings = story.ratings ? story.ratings : [];
		const averageRating = ratings!.reduce((total, rating) => total + rating.ratingValue, 0) / ratings?.length;
		
		const deathCount = getDeathCount(story);

		return (
			<Card className="flex flex-col w-full h-full mt-8 gap-10 items-center md:w-[80%] lg:w-[65%] xl:w-[50%]">
				<Card className="flex flex-col w-full h-fit items-center gap-5">
					<CardTitle className="text-4xl">{story.title || 'Story Name'}</CardTitle>
					<CardContent className="flex flex-col w-full h-full gap-5 items-center p-0">
						<StoryInfo
							rating={averageRating}
							ageRating={story.targetAge!}
							nodes={story.storyNodes?.length}
							deaths={deathCount}
							difficulty={story.difficulty!}
							playtime={story.playtime!}
						/>
					</CardContent>
				</Card>
				<Card className="flex flex-col w-full h-fit items-center gap-5 mb-10">
					<CardContent className="flex flex-col w-full h-full gap-5 items-center p-0">
						<StoryDescription content={story.description!}/>
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
	}
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

const getDeathCount = (story: Story): number | undefined => {
	const deathNodes = story.storyNodes?.filter((node) => node.encounterType === "death");
	return deathNodes?.length;
}