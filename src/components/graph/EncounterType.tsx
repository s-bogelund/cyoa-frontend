import React, { FC } from 'react';
import { Card } from '../shadcn/ui/card';
import { Button } from '../shadcn/ui/button';
import { Icons } from '../icons/Icons';
import { IconType } from 'react-icons';

type EncounterTypeProps = {
	onSelected: (encounterType: string) => void;
	currentEncounterType: string;
};

const EncounterType: FC<EncounterTypeProps> = ({ onSelected, currentEncounterType }) => {
	const sharedStyle = 'w-24 h-24 text-white text-lg relative';
	const sharedIconStyle = 'w-full h-full opacity-20 absolute stroke-1';

	console.log('currentEncounterType: ', currentEncounterType);

	const DeathIcon: IconType = Icons.Death;
	const SkullIcon: IconType = Icons.Skull;
	const CombatIcon: IconType = Icons.Sword;
	const SpeechIcon = Icons.Speech;

	return (
		<Card className="flex justify-between gap-2 flex-wrap">
			<Button
				value={'combat'}
				className={sharedStyle}
				variant={currentEncounterType === 'combat' ? 'default' : 'outline'}
				onClick={() => onSelected('combat')}
			>
				<p className="z-40">Spilleren kæmper</p>

				<CombatIcon
					className={`${sharedIconStyle} ${
						currentEncounterType === 'combat' ? 'text-black !opacity-50' : ''
					}`}
				/>
			</Button>
			<Button
				value={'conversation'}
				className={sharedStyle}
				variant={currentEncounterType === 'conversation' ? 'default' : 'outline'}
				onClick={() => onSelected('conversation')}
			>
				<p className="z-40">Spilleren snakker</p>

				<SpeechIcon
					className={`${sharedIconStyle} ${
						currentEncounterType === 'conversation' ? 'text-black !opacity-50' : ''
					}`}
				/>
			</Button>
			<Button
				value={'death'}
				className={sharedStyle}
				variant={currentEncounterType === 'death' ? 'default' : 'outline'}
				onClick={() => onSelected('death')}
			>
				<p className="z-40">Spilleren dør!</p>

				<SkullIcon
					className={`${sharedIconStyle} ${
						currentEncounterType === 'death' ? 'text-black !opacity-50' : ''
					}`}
				/>
			</Button>
			<Button
				value="other"
				className={sharedStyle}
				onClick={() => onSelected('other')}
				variant={currentEncounterType === 'other' ? 'default' : 'outline'}
			>
				<p className="z-40">Noget andet</p>
				<DeathIcon
					className={`${sharedIconStyle} ${
						currentEncounterType === 'other' ? 'text-black !opacity-50' : ''
					}`}
				/>
			</Button>
		</Card>
	);
};

export default EncounterType;
