import React, { FC } from 'react';

import { Card, CardContent, CardTitle } from '../shadcn/ui/card';

type StoryDescriptionProps = {
	content?: string;
};

const StoryDescription: FC<StoryDescriptionProps> = ({ content }) => {
	return (
		<Card className="w-full border-2 p-6">
			<CardTitle className="mb-4">Beskrivelse</CardTitle>
			<CardContent className="w-full p-0">
				<p
					className="w-full h-fit"
					dangerouslySetInnerHTML={{ __html: content || dummy.replace(/\n/g, '<br />') }}
				></p>
			</CardContent>
		</Card>
	);
};

export default StoryDescription;

const dummy = `I "Troldehulen," følg med på en utrolig rejse ind i en verden af magi og mysterier. Hovedpersonen, en ung eventyrer, drager dybt ind i de skovklædte landskaber for at finde den mytiske Troldehule. Men hulen er ikke blot en tom grotte; den er en labyrint fyldt med farer, gåder og ukendte væsner.

Gennem farefulde prøvelser og spil af snilde danner vores helt uventede alliancer med skovens magiske beboere. Sammen må de navigere igennem hulens komplekse puslespil og undgå dødbringende fælder. Men det mest farefulde af det hele er måske hulens vægter, en gammel trold som er lige så snu som han er frygtindgydende.

Kan vores helt og hans nye venner løse Troldehulens hemmeligheder, overleve dens farer, og komme ud på den anden side? Det er en historie om mod, venskab, og den utrættelige menneskelige ånd, der vil holde dig på kanten af din stol fra begyndelse til slut.
`;
