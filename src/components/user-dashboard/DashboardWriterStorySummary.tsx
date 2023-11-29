import { useQuery } from '@apollo/client';
import React, { FC } from 'react';

import GET_STORY_FOR_WRITER_SUMMARY, {
	GetStoryForWriterSummaryQueryResult,
} from '@/api/queries/getStoryForWriterSummary';

import { Card } from '../shadcn/ui/card';
import WriterStoryElements from './WriterStoryElements';

// TODO: Parent needs a query that fetches the user's story that has the latest modifications made to them
// TODO: This story
type DashboardWriterStorySummaryProps = {
	storyId: string;
};

const DashboardWriterStorySummary: FC<DashboardWriterStorySummaryProps> = ({ storyId }) => {
	const { loading, error, data } = useQuery<GetStoryForWriterSummaryQueryResult>(
		GET_STORY_FOR_WRITER_SUMMARY,
		{ variables: { idInput: storyId } }
	);

	if (loading) {
		console.log('loading', loading);
		return <p>Loading...</p>;
	}
	if (error) {
		console.log('error', error);
		return <p>Error: {error?.message}</p>;
	}
	if (data) {
		const story = data.stories[0];
		return (
			<Card className="flex flex-col border-2 items-center p-2">
				<Card className="h-fit text-2xl mb-3">{story.title}</Card>
				<WriterStoryElements story={story} />
			</Card>
		);
	}
};

export default DashboardWriterStorySummary;
