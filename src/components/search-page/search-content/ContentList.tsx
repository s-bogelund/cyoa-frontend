import { Card } from '@/components/shadcn/ui/card';
import React, { FC } from 'react';
import ContentItem from './ContentItem';

type ContentListProps = {
	gameInfos: GameInfo[];
	onItemSelected: (id: string) => void;
};

const ContentList: FC<ContentListProps> = ({ onItemSelected: itemSelected, gameInfos = [] }) => {
	const renderListItems = () => {
		return gameInfos.map((game, index) => (
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
			{gameInfos.length > 0 && renderListItems()}
		</Card>
	);
};

export default ContentList;
