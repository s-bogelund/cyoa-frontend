import React, { FC } from 'react';

import { Card, CardContent, CardTitle } from '../shadcn/ui/card';

type StoryDescriptionProps = {
	content?: string;
};

const StoryDescription: FC<StoryDescriptionProps> = ({ content }) => {
	let displayedContent;
	if (content) {
		displayedContent = content;
	} else {
		displayedContent = "Beskrivelse mangler."
	}

	return (
		<Card className="w-full border-2 p-6">
			<CardTitle className="mb-4">Beskrivelse</CardTitle>
			<CardContent className="w-full p-0">
				<p
					className="w-full h-fit"
				>
					{displayedContent}
				</p>
			</CardContent>
		</Card>
	);
};

export default StoryDescription;
