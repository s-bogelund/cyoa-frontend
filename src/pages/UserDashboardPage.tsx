import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/shadcn/ui/button';
import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card';
import DashboardReaderStorySummary from '@/components/user-dashboard/DashboardReaderStorySummary';
import DashboardWriterStorySummary from '@/components/user-dashboard/DashboardWriterStorySummary';
import { Playthrough, Story, User } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import GET_USER_INFO_FOR_DASHBOARD, {
	GetUserInfoForDashboardQueryResult,
} from '@/api/queries/getUserInfoForDashboard';

// Can be setup to take in a user, when proper auth is implemented (out of scope)
type UserDashboardProps = {
	// user: User;
};

export const dummyUserId: string = '11849e3c-7362-4d9c-b068-300fa967eac7';

const UserDashboardPage: FC<UserDashboardProps> = () => {
	const navigate = useNavigate();

	const { loading, error, data } = useQuery<GetUserInfoForDashboardQueryResult>(
		GET_USER_INFO_FOR_DASHBOARD,
		{ variables: { idInput: dummyUserId } }
	);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message} </p>;
	}
	if (data) {
		const user = data.users[0];

		// TODO: Find a cleaner way to calculate nodesRead and nodesWritten. Probably by using "Array.reduce"
		let nodesRead: number = 0;
		if (!user || !user.playthroughs) {
			return <p>No playthroughs found</p>;
		}
		user.playthroughs?.forEach(playthrough => {
			playthrough.visitedStoryNodes?.forEach(visitedNode => nodesRead++);
		});

		let nodesWritten: number = 0;
		user.stories?.forEach(story => {
			story.storyNodes?.forEach(storyNode => nodesWritten++);
		});

		const latestPlaythrough = findLatestPlaythrough(user);
		const latestStory = findLatestStory(user);

		return (
			<Card className="flex flex-col w-full h-full mt-8 gap-10 md:w-[80%] lg:w-[75%] xl:min-w-[1000px] xl:w-[50%] ">
				<Card className="text-center">
					<CardTitle className="text-4xl mb-8">Hej {user.firstName}!</CardTitle>
				</Card>
				<Card>
					<CardContent className="">
						Du har læst {nodesRead} afsnit den seneste måned og selv skrevet {nodesWritten} afsnit.
						Godt gået!
					</CardContent>
				</Card>
				<Card className="border-2 p-4">
					<CardContent className="text-2xl">Hvad vil du gerne lave i dag?</CardContent>
					<Card className="flex flex-row justify-evenly p-6">
						<Button className="h-32 text-lg w-[30%]" onClick={() => navigate('/browse')}>
							Finde en ny historie at læse
						</Button>
						{/* TODO: Below button should link to the writers story view, when this view has been made, and onClick should take an input with the id*/}
						<Button
							className="h-32 text-lg w-[30%]"
							onClick={() => {
								// Create new story for the user and get the ID.
								// Pass ID into URL for writer-summary page to read and query with
								// Update navigate below to also include search-params, based on the created story's ID
								navigate('/writer-summary');
							}}
						>
							Skrive en ny historie
						</Button>
					</Card>
				</Card>
				<Card className="border-2 p-4">
					<CardContent className="text-2xl">Du kan også fortsætte, hvor du slap</CardContent>
					<Card className="flex flex-col sm:flex-row justify-evenly gap-3">
						<Card className="flex flex-col justify-between w-full sm:w-[45%] border-2 p-4">
							<Card>
								<DashboardReaderStorySummary currentNodeId={latestPlaythrough?.currentNode} />
							</Card>
							<Button
								className="text-lg w-full mt-4 self-end"
								onClick={() =>
									navigate({
										pathname: '/playnode',
										search: `?storyNodeId=${latestPlaythrough!.currentNode}`,
									})
								}
							>
								Fortsæt historien
							</Button>
						</Card>
						<Card className="flex flex-col justify-between w-full sm:w-[45%] border-2 p-4">
							<Card>
								<DashboardWriterStorySummary storyId={latestStory!.id} />
							</Card>
							<Button
								className="text-lg w-full mt-4 self-end"
								onClick={() =>
									navigate({
										pathname: '/writer-summary',
										search: `?storyId=${latestStory!.id}`,
									})
								}
							>
								Skriv videre
							</Button>
						</Card>
					</Card>
				</Card>
			</Card>
		);
	}
};

export default UserDashboardPage;

function findLatestPlaythrough(input: User): Playthrough | undefined {
	const latestPlaythrough = input.playthroughs?.reduce((latest, current) => {
		let currentDate = new Date(current.modifiedAt);
		let latestDate = new Date(latest.modifiedAt);
		return currentDate.getTime() > latestDate.getTime() ? current : latest;
	}, input.playthroughs[0]);

	return latestPlaythrough;
}

function findLatestStory(input: User): Story | undefined {
	const latestStory = input.stories?.reduce((latest, current) => {
		let currentDate = new Date(current.modifiedAt);
		let latestDate = new Date(latest.modifiedAt);
		return currentDate.getTime() > latestDate.getTime() ? current : latest;
	}, input.stories[0]);

	return latestStory;
}
