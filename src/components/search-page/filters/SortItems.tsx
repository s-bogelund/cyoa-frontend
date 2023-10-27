import React, { FC } from 'react';

import { Card } from '@/components/shadcn/ui/card';

import FilterWrapper from './FilterWrapper';
import { SortState } from '../search-content/ContentList';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

type SortAttribute = 'age' | 'rating' | 'time' | 'difficulty';
type Direction = 'asc' | 'desc';

type SortItemProps = {
	className?: string;
	sortState: SortState;
	onChange(sortState: SortState): void;
};

const SortItem: FC<SortItemProps> = ({ className, sortState }) => {
	const { t } = useTranslation();

	const handleSortClick = (attribute: SortAttribute) => {
		console.log(attribute);
	};
	console.log(i18n.t('searchPage.sortOptions.age'));
	return (
		<Card className="flex w-fit h-full gap-2 p-1 ">
			<FilterWrapper
				alignOffset={-20}
				sideOffset={5}
				text={`Sortér efter ${sortState.attribute}}`}
				className={`w-fit items-self-end ${className}`}
			>
				<Card className="flex flex-col w-fit gap-1">
					<div
						className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
						onClick={() => handleSortClick('age')}
					>
						{t('searchPage.sortOptions.age')}
					</div>
					<div
						className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
						onClick={() => handleSortClick('rating')}
					>
						Bedømmelse
					</div>
					<div
						className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
						onClick={() => handleSortClick('difficulty')}
					>
						Sværhedsgrad
					</div>
					<div
						className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
						onClick={() => handleSortClick('time')}
					>
						Gennemførelsestid
					</div>
				</Card>
			</FilterWrapper>
			<FilterWrapper text="Faldende"></FilterWrapper>
		</Card>
	);
};

export default SortItem;
