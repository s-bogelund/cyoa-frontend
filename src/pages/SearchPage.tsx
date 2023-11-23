import { useQuery } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';

import GET_ALL_STORIES, { GetAllStoriesQueryResult } from '@/api/queries/getStories';
import AgeFilter from '@/components/search-page/filters/AgeFilter';
import CompletionTimeFilter from '@/components/search-page/filters/CompletionTimeFilter';
import DifficultyFilterType from '@/components/search-page/filters/DifficultyFilter';
import ContentList from '@/components/search-page/search-content/ContentList';
import SearchBar from '@/components/search-page/SearchBar';
import { Card, CardDescription, CardTitle } from '@/components/shadcn/ui/card';
import { gameInfos } from '@/utils/dummyData';
import { StoryNode } from '@/gql/graphql';
type DifficultyFilterType = {
	easy: boolean;
	medium: boolean;
	hard: boolean;
};

type SearchPageProps = {};

const SearchPage: FC<SearchPageProps> = ({}) => {
	const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilterType>({
		easy: false,
		medium: false,
		hard: false,
	});

	const { loading, error, data } = useQuery<GetAllStoriesQueryResult>(GET_ALL_STORIES);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data || !data.stories) return <p>No stories found.</p>;

	const handleDifficultyChange = (selectedValues: string[]) => {
		const newFilterState: DifficultyFilterType = { easy: false, medium: false, hard: false };

		selectedValues.forEach(key => {
			if (key in newFilterState) {
				newFilterState[key as keyof DifficultyFilterType] = true;
				console.log(key);
			}
		});
		console.log(newFilterState);

		setDifficultyFilter(newFilterState);
	};

	return (
		<Card className="flex flex-col w-full lg:w-[75%] xl:w-[65%] h-full gap-10">
			<CardTitle className="self-center lg:text-6xl md:text-4xl text-2xl">Søgeside</CardTitle>
			<CardDescription className="self-center lg:text-2xl md:text-xl text-md">
				Her kan du finde en historie der er tilpasset lige præcis det, du er mest interesseret i!
			</CardDescription>
			<Card id="search-and-filter-container" className="flex flex-col gap-4 w-full h-fit">
				<SearchBar onInput={value => console.log(value)} />

				<Card className="flex flex-wrap w-fit h-fit bg-transparent gap-4">
					<AgeFilter onChange={value => console.log(value)} />
					<CompletionTimeFilter onChange={value => console.log(value)} />
					<DifficultyFilterType selected={difficultyFilter} onChange={handleDifficultyChange} />
				</Card>
			</Card>
			<Card id="content-filter-container" className="flex flex-col w-full h-full gap-8">
				<ContentList onItemSelected={id => console.log('Id clicked:', id)} stories={data.stories} />
			</Card>
		</Card>
	);
};

export default SearchPage;
