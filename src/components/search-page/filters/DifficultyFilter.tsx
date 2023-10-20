import React, { useState, useEffect, useMemo } from 'react';
import FilterWrapper from './FilterWrapper';
import { Card } from '@/components/shadcn/ui/card';
import { Icons } from '@/components/icons/Icons';
import { Label } from '@/components/shadcn/ui/label';
import { Checkbox } from '@/components/shadcn/ui/checkbox';

type DifficultyFilterProps = {
	onChange: (value: number[] | boolean, isSet: boolean) => void;
};

const DifficultyFilter: React.FC<DifficultyFilterProps> = ({ onChange }) => {
	const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

	// const handleCheckboxChange = (value: boolean) => {
	// 	const { id, checked } = e.target;
	// 	setSelected(prev => ({
	// 		...prev,
	// 		[id]: checked,
	// 	}));
	// };

	const selectedValues = useMemo(() => {
		return Object.keys(selected).filter(key => selected[key]);
	}, [selected]);

	const Icon = Icons.skull;

	return (
		<FilterWrapper text={'Sværhedsgrad'}>
			<Card className="flex flex-col gap-2">
				<div className="flex items-center justify-start gap-2">
					<Checkbox id="easy" value={1} />
					<Label htmlFor="easy" className="cursor-pointer">
						<Icon className="w-6" />
					</Label>
				</div>
				<div className="flex items-center justify-start gap-2">
					<Checkbox id="medium" value={2} />
					<Label htmlFor="medium" className="cursor-pointer">
						<div className="flex gap-0.5">
							<Icon className="w-6" />
							<Icon className="w-6" />
						</div>
					</Label>
				</div>
				<div className="flex items-center justify-start gap-2">
					<Checkbox id="hard" value={3} />
					<Label htmlFor="hard" className="cursor-pointer">
						<div className="flex gap-0.5">
							<Icon className="w-6" />
							<Icon className="w-6" />
							<Icon className="w-6" />
						</div>
					</Label>
				</div>
			</Card>
		</FilterWrapper>
	);
};

export default DifficultyFilter;
