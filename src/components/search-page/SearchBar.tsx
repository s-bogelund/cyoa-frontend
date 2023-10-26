import React, { FC } from 'react';
import { Card } from '../shadcn/ui/card';
import { Icons } from '../icons/Icons';
import { Search } from 'lucide-react';
const SkullIcon: React.FC = () => <Icons.Skull className="w-6" />;

type SearchBarProps = {
	onInput: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onInput }) => {
	return (
		<Card className="flex items-center justify-center border border-input rounded-md bg-background h-12">
			<div className="flex justify-center items-center rounded-md rounded-r-none bg-slate-700 bg-transparent h-10 w-10">
				<Search />
			</div>
			<input
				type="search"
				placeholder="Søg efter en historie"
				onInput={e => onInput(e.currentTarget.value)}
				className="flex-grow h-full rounded-md rounded-l-none bg-transparent px-2 text-lg placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			/>
		</Card>
	);
};

export default SearchBar;
