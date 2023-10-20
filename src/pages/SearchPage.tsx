import Badge from '@/components/generics/Badge';
import SearchBar from '@/components/search-page/SearchBar';
import AgeFilter from '@/components/search-page/filters/AgeFilter';
import CompletionTimeFilter from '@/components/search-page/filters/CompletionTimeFilter';
import DifficultyFilter from '@/components/search-page/filters/DifficultyFilter';
import FilterWrapper from '@/components/search-page/filters/FilterWrapper';
import FilterWrapperProps from '@/components/search-page/filters/FilterWrapper';
import { Card, CardDescription, CardTitle } from '@/components/shadcn/ui/card';
import { Checkbox } from '@/components/shadcn/ui/checkbox';
import React, { FC, useState } from 'react';

type DifficultyFilter = {
	easy: boolean;
	medium: boolean;
	hard: boolean;
};

type SearchPageProps = {};

const SearchPage: FC<SearchPageProps> = ({}) => {
	const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>({
		easy: false,
		medium: false,
		hard: false,
	});

	const handleDifficultyChange = (selectedValues: string[]) => {
		const newFilterState: DifficultyFilter = { easy: false, medium: false, hard: false };

		selectedValues.forEach(key => {
			if (key in newFilterState) {
				newFilterState[key as keyof DifficultyFilter] = true;
				console.log(key);
			}
		});
		console.log(newFilterState);

		setDifficultyFilter(newFilterState);
	};

	return (
		<Card className="flex flex-col w-full lg:w-[75%] xl:w-[65%] h-full gap-4">
			<CardTitle className="self-center lg:text-6xl md:text-4xl text-2xl">Søgeside</CardTitle>
			<CardDescription className="self-center lg:text-2xl md:text-xl text-md">
				Her kan du finde en historie der er tilpasset til lige præcis det, du er mest interesseret
				i!
			</CardDescription>
			<Card id="search-and-filter-container" className="flex flex-col gap-4 w-full h-fit">
				<SearchBar />

				<Card className="flex flex-wrap w-fit h-fit bg-transparent gap-4">
					<AgeFilter onChange={value => console.log(value)} />
					<CompletionTimeFilter onChange={value => console.log(value)} />
					<DifficultyFilter selected={difficultyFilter} onChange={handleDifficultyChange} />
				</Card>
			</Card>
			<Card id="content-filter-container" className="flex w-full h-full gap-8">
				{/* <Card id="filters" className="w-[20%] h-full self-start bg-red-400 md:flex hidden"></Card> */}
				<Card id="search-content" className="w-full h-full bg-blue-400"></Card>
			</Card>
		</Card>
	);
};

export default SearchPage;
