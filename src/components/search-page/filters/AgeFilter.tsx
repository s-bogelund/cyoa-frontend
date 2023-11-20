import { Label } from '@radix-ui/react-label';
import React, { FC, useState } from 'react';

import { Slider } from '@/components/shadcn/ui/slider';

import FilterWrapper from './FilterWrapper';

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

	const handleWrapperValue = () => {
		if (age === 2) {
			return 'Alle Aldre';
		} else if (age === 18) {
			return `Alder: ${age}+`;
		} else {
			return `Max alder: ${age} år`;
		}
	};

	const handleLabelValue = () => {
		if (age <= 2) {
			return 'Alle Aldre';
		} else if (age === 18) {
			return `${age}+`;
		} else {
			return `${age}`;
		}
	};

	return (
		<FilterWrapper text={handleWrapperValue()}>
			<Label className="text-lg mb-5" htmlFor="age-slider">
				{handleLabelValue()}
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
