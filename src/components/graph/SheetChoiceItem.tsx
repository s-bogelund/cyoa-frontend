import React, { FC } from 'react';
import { Input } from '../shadcn/ui/input';

type SheetChoiceItemPropsProps = {
	choiceText?: string;
	onChange: (value: string) => void;
};

const SheetChoiceItemProps: FC<SheetChoiceItemPropsProps> = ({ choiceText, onChange }) => {
	const [value, setValue] = React.useState<string>(choiceText || '');

	return (
		<Input
			value={value}
			onInput={e => setValue(e.currentTarget.value)}
			placeholder="Hvad vælger karakteren?"
		/>
	);
};

export default SheetChoiceItemProps;
