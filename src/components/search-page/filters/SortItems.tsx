import React, { FC } from 'react';

import { Card } from '@/components/shadcn/ui/card';

import FilterWrapper from './FilterWrapper';
import { SortBy, SortOrder, SortState } from '../search-content/ContentList';
import { useTranslation } from 'react-i18next';
import Badge from '@/components/generics/Badge';
import { PopoverComponent, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';

type SortItemProps = {
	className?: string;
	sortState: SortState;
	onChange(sortState: SortState): void;
};

const SortItem: FC<SortItemProps> = ({ className, sortState, onChange }) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const { t } = useTranslation();

	const handleSortClick = (attribute: SortBy) => {
		console.log(attribute);
		setIsOpen(false);
		const newState = {
			...sortState,
			attribute,
		};

		console.log(newState);
		onChange(newState);
	};
	console.log(t('searchPage.sortOptions.age'));

	function handleDirectionClick() {
		const newState = {
			...sortState,
			direction:
				sortState.direction === 'ascending'
					? ('descending' as SortOrder)
					: ('ascending' as SortOrder),
		};

		onChange(newState);
	}

	return (
		<Card className="flex w-fit h-full gap-2 p-1 ">
			<PopoverComponent open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger>
					<Badge
						onClick={() => setIsOpen(!isOpen)}
						variant="outline"
						className={`h-8 ${className}`}
						text={`Sortér efter ${t(`searchPage.sortOptions.${sortState.attribute}`)}`}
						// className={`w-fit items-self-end ${className}`}
					/>
				</PopoverTrigger>
				<PopoverContent sideOffset={10} alignOffset={0} align="start" className="w-fit h-fit">
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
							{t('searchPage.sortOptions.rating')}
						</div>
						<div
							className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
							onClick={() => handleSortClick('difficulty')}
						>
							{t('searchPage.sortOptions.difficulty')}
						</div>
						<div
							className="cursor-pointer betterhover:hover:bg-white betterhover:hover:bg-opacity-5 px-2 rounded-sm"
							onClick={() => handleSortClick('completionTime')}
						>
							{t('searchPage.sortOptions.completionTime')}
						</div>
					</Card>
				</PopoverContent>
			</PopoverComponent>
			<Badge
				variant="outline"
				className={`h-8 ${className}`}
				text={t(`searchPage.sortOptions.${sortState.direction}`)}
				onClick={handleDirectionClick}
			/>
		</Card>
	);
};

export default SortItem;
