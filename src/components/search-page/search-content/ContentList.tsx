import React, { FC, useCallback, useMemo } from 'react';

import { Card } from '@/components/shadcn/ui/card';

import SortItem from '../filters/SortItems';
import ContentItem from './ContentItem';
import { GetAllStoriesQueryResult } from '@/api/queries/getStories';
import { Maybe, Story } from '@/gql/graphql';

type ContentListProps = {
	stories: Story[];
	onItemSelected: (id: string) => void;
	sortState?: SortState;
};

export type SortBy = 'difficulty' | 'targetAge' | 'ratings';
export type SortOrder = 'ascending' | 'descending';

export type SortState = {
	attribute: SortBy;
	direction: SortOrder;
};

const ContentList: FC<ContentListProps> = ({
	onItemSelected: itemSelected,
	sortState,
	stories,
}) => {
	const [sortBy, setSortBy] = React.useState<SortBy>(sortState?.attribute ?? 'targetAge');
	const [sortOrder, setSortOrder] = React.useState<SortOrder>(sortState?.direction ?? 'descending');

	const avgRating = useCallback((game: Story): number => {
		if (!game.ratings || game.ratings.length === 0) return 0;
		const sum = game.ratings.reduce((acc, curr) => acc + curr.ratingValue, 0);
		return Number((sum / game.ratings.length).toFixed(2));
	}, []);

	const sortedStories = useMemo(() => {
		const orderMultiplier = sortOrder === 'ascending' ? 1 : -1;

		return [...stories].sort((a, b) => {
			let aValue: any;
			let bValue: any;

			// Special handling for 'ratings' since it's an array
			if (sortBy === 'ratings') {
				aValue = avgRating(a);
				bValue = avgRating(b);
			} else if (sortBy === 'difficulty') {
				aValue = difficultySort(a[sortBy]);
				bValue = difficultySort(b[sortBy]);
			} else {
				aValue = a[sortBy] ?? 0; // Replace `0` with a suitable default value
				bValue = b[sortBy] ?? 0; // Replace `0` with a suitable default value
			}

			console.log(aValue, bValue);

			if (aValue < bValue) return -1 * orderMultiplier;
			if (aValue > bValue) return 1 * orderMultiplier;
			return 0;
		});
	}, [stories, sortBy, sortOrder, avgRating]);

	const renderListItems = () => {
		return sortedStories.map((story, index) => (
			<ContentItem
				key={story.id}
				title={story.title ?? ''}
				targetAge={story.targetAge ?? 4}
				rating={avgRating(story)}
				completionTime={Math.round(Math.random() * 10) + 1} // Assuming completionTime is a static value
				difficulty={story.difficulty ?? 'easy'}
				id={story.id}
				onClick={() => itemSelected(story.id)}
			/>
		));
	};

	return (
		<Card className="flex flex-col w-full h-full gap-2 p-1 ">
			<div className="flex w-full justify-end">
				<SortItem
					sortState={{
						attribute: sortBy,
						direction: sortOrder,
					}}
					onChange={sortState => {
						setSortBy(sortState.attribute);
						setSortOrder(sortState.direction);
					}}
				/>
			</div>

			{stories.length > 0 && renderListItems()}
		</Card>
	);
};

export default ContentList;

function difficultySort(difficulty: string | Maybe<string> | undefined) {
	if (!difficulty) return 0;
	switch (difficulty) {
		case 'easy':
			return 1;
		case 'medium':
			return 2;
		case 'hard':
			return 3;
		default:
			return 0;
	}
}
