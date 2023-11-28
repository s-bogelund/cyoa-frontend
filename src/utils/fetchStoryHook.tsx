import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import useStore from '@/graphStore';
import { GET_STORY_QUERY } from '@/api/queries/getStory';

// export const useFetchStoryData = (storyId: string) => {
// 	const { data, loading, error } = useQuery(GET_STORY_QUERY, {
// 		variables: { id: storyId },
// 	});

// 	const updateStore = useStore(state => state);

// 	useEffect(() => {
// 		if (data && !loading && !error) {
// 			// Assuming the story data is in data.storyQuery
// 			updateStore(data.storyQuery);
// 		}
// 	}, [data, loading, error, updateStore]);
// };
