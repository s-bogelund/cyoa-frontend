import React, { FC } from 'react';
import { Card } from '../shadcn/ui/card';
import { Button } from '../shadcn/ui/button';

type EncounterTypeProps = {
	onSelected: (encounterType: string) => void;
	currentEncounterType: string;
};

const EncounterType: FC<EncounterTypeProps> = ({ onSelected, currentEncounterType }) => {
	const sharedStyle = 'w-24 h-24';

	console.log('currentEncounterType: ', currentEncounterType);

	return (
		<Card className="flex justify-between gap-2 flex-wrap">
			<Button
				value={'combat'}
				className={sharedStyle}
				variant={currentEncounterType === 'combat' ? 'default' : 'outline'}
				onClick={() => onSelected('combat')}
			>
				Kamp
			</Button>
			<Button
				value={'conversation'}
				className={sharedStyle}
				variant={currentEncounterType === 'conversation' ? 'default' : 'outline'}
				onClick={() => onSelected('conversation')}
			>
				Samtale
			</Button>
			<Button
				value={'death'}
				className={sharedStyle}
				variant={currentEncounterType === 'death' ? 'default' : 'outline'}
				onClick={() => onSelected('death')}
			>
				Død
			</Button>
			<Button
				value="other"
				className={sharedStyle}
				onClick={() => onSelected('other')}
				variant={currentEncounterType === 'other' ? 'default' : 'outline'}
			>
				Andet
			</Button>
		</Card>
	);
};

export default EncounterType;
