import React, { FC, useState } from 'react';
import FilterWrapper from './FilterWrapper';
import { Label } from '@/components/shadcn/ui/label';
import { Slider } from '@/components/shadcn/ui/slider';

type CompletionTimeFilterProps = {
	onChange: (value: number | boolean) => void;
	isSet?: boolean;
};

const CompletionTimeFilter: FC<CompletionTimeFilterProps> = ({ onChange }) => {
	const [time, setTime] = useState<number>(0);
	const [isSet, setIsSet] = useState<boolean>(false);

	const handleValueChange = (value: number) => {
		if (value !== 0) {
			setIsSet(true);
			onChange(value);
		} else {
			onChange(false);
			setIsSet(false);
		}
		setTime(value);
	};

	const handleLabelValue = () => {
		if (time === 0) {
			return 'Alle';
		} else if (time === 1) {
			return `${time} time`;
		} else if (time === 12) {
			return `${time}+ timer`;
		} else {
			return `${time} timer`;
		}
	};

	return (
		<FilterWrapper text={'Gennemførselstid'}>
			<Label className="text-lg mb-5" htmlFor="time-slider">
				{isSet && time !== 0 ? `${handleLabelValue()}` : 'Alt'}
			</Label>
			<Slider
				id="time-slider"
				value={[time]}
				onValueChange={value => handleValueChange(value[0])}
				min={0}
				className="mt-2"
				defaultValue={[0]}
				step={1}
				max={12}
			/>
		</FilterWrapper>
	);
};

export default CompletionTimeFilter;
