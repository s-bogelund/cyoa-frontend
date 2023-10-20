import React, { FC, useState } from 'react';
import FilterWrapper from './FilterWrapper';
import { Slider } from '@/components/shadcn/ui/slider';
import { Label } from '@radix-ui/react-label';

type AgeFilterProps = {
	onChange: (value: number | boolean) => void;
	isSet?: boolean;
};

const AgeFilter: FC<AgeFilterProps> = ({ onChange }) => {
	const [age, setAge] = useState<number>(2);
	const [isSet, setIsSet] = useState<boolean>(false);

	const handleValueChange = (value: number) => {
		if (value !== 2) {
			setIsSet(true);
			onChange(value);
		} else {
			onChange(false);
			setIsSet(false);
		}
		setAge(value);
	};

	return (
		<FilterWrapper text={'Max Alder'}>
			<Label className="text-lg mb-5" htmlFor="age-slider">
				{isSet && age !== 18 ? `${age} år` : 'Alle Aldre'}
			</Label>
			<Slider
				id="age-slider"
				value={[age]}
				onValueChange={value => handleValueChange(value[0])}
				min={2}
				className="mt-2 w-48"
				defaultValue={[2]}
				step={2}
				max={18}
			/>
		</FilterWrapper>
	);
};

export default AgeFilter;
