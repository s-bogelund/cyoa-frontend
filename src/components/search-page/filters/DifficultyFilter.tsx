import React from 'react';

import { Icons } from '@/components/icons/Icons';
import { Card } from '@/components/shadcn/ui/card';
import { Checkbox } from '@/components/shadcn/ui/checkbox';
import { Label } from '@/components/shadcn/ui/label';

import FilterWrapper from './FilterWrapper';

const SkullIcon: React.FC = () => <Icons.Skull className="w-6" />;

type DifficultyFilterProps = {
	onChange: (value: string[]) => void;
	selected: { [key: string]: boolean };
};

const DifficultyFilter: React.FC<DifficultyFilterProps> = ({ selected, onChange }) => {
	const toggleDifficulty = (id: string) => {
		const updated = { ...selected, [id]: !selected[id] };
		const selectedValues = Object.keys(updated).filter(key => updated[key]);
		onChange(selectedValues);
	};

	return (
		<FilterWrapper text={'Sværhedsgrad'}>
			<Card className="flex flex-col gap-2">
				<div className="flex items-center justify-start gap-2">
					<Checkbox id="easy" checked={selected.easy} onClick={() => toggleDifficulty('easy')} />
					<Label htmlFor="easy" className="cursor-pointer">
						<SkullIcon />
					</Label>
				</div>
				<div className="flex items-center justify-start gap-2">
					<Checkbox
						id="medium"
						checked={selected.medium}
						onClick={() => toggleDifficulty('medium')}
					/>
					<Label htmlFor="medium" className="cursor-pointer">
						<div className="flex gap-0.5">
							<SkullIcon />
							<SkullIcon />
						</div>
					</Label>
				</div>
				<div className="flex items-center justify-start gap-2">
					<Checkbox id="hard" checked={selected.hard} onClick={() => toggleDifficulty('hard')} />
					<Label htmlFor="hard" className="cursor-pointer">
						<div className="flex gap-0.5">
							<SkullIcon />
							<SkullIcon />
							<SkullIcon />
						</div>
					</Label>
				</div>
			</Card>
		</FilterWrapper>
	);
};

export default DifficultyFilter;
