import { Card, CardDescription, CardTitle } from '@/components/shadcn/ui/card';
import React, { FC } from 'react';

type SearchPageProps = {};

const SearchPage: FC<SearchPageProps> = ({}) => {
	return (
		<Card className="flex flex-col w-full lg:w-[75%] xl:w-[65%] h-full gap-8">
			<CardTitle className="self-center lg:text-6xl md:text-4xl text-2xl">Søgeside</CardTitle>
			<CardDescription className="self-center lg:text-2xl md:text-xl text-md">
				Her kan du finde en historie der er tilpasset til lige præcis det, du er mest interesseret
				i!
			</CardDescription>
			<Card id="search-bar" className="w-full h-[10%] bg-green-400 "></Card>
			<Card id="content-filter-container" className="flex w-full h-full gap-8">
				<Card id="filters" className="w-[20%] h-full self-start bg-red-400 md:flex hidden"></Card>
				<Card id="search-content" className="w-full h-full bg-blue-400"></Card>
			</Card>
		</Card>
	);
};

export default SearchPage;
