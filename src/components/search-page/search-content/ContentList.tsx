import { Card } from '@/components/shadcn/ui/card';
import React, { FC } from 'react';
import ContentItem from './ContentItem';
import SortItem from '../filters/SortItems';

type ContentListProps = {
	gameInfos: GameInfo[];
	onItemSelected: (id: string) => void;
	sortState?: SortState;
};

type SortBy = 'difficulty' | 'age' | 'rating' | 'time';
type SortOrder = 'asc' | 'desc';

export type SortState = {
	attribute: SortBy;
	direction: SortOrder;
};

const ContentList: FC<ContentListProps> = ({
	onItemSelected: itemSelected,
	sortState,
	gameInfos = [],
}) => {
	const [sortBy, setSortBy] = React.useState<SortBy>(sortState?.attribute ?? 'rating');
	const [sortOrder, setSortOrder] = React.useState<SortOrder>(sortState?.direction ?? 'desc');

	const sortedGameInfos = () => {
		return gameInfos.sort((a, b) => {
			if (sortOrder === 'asc') {
				if (a[sortBy] < b[sortBy]) return -1;
				if (a[sortBy] > b[sortBy]) return 1;
				return 0;
			} else {
				if (a[sortBy] > b[sortBy]) return -1;
				if (a[sortBy] < b[sortBy]) return 1;
				return 0;
			}
		});
	};

	const renderListItems = () => {
		return sortedGameInfos().map((game, index) => (
			<ContentItem
				key={`content-${index}`}
				title={game.title}
				age={game.age}
				rating={game.rating}
				time={game.time}
				difficulty={game.difficulty}
				id={`content-${index}`}
				onClick={id => {
					itemSelected(id);
				}}
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

			{gameInfos.length > 0 && renderListItems()}
		</Card>
	);
};

export default ContentList;
