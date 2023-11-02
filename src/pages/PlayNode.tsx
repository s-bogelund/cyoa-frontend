import React, { FC } from 'react';

import { Card, CardTitle } from '../components/shadcn/ui/card';
import NodeOptions from '../components/story-node/NodeOptions';
import NodeTextContainer from '../components/story-node/NodeTextContainer';

type PlayNodeProps = {};

const dummyOptions = [
	'This is a very long Option One that certainly exceeds the seventy-five ',
	"Here's another Option Two that is also designed to be longer than ",
	'Tell the troll your name and that you are looking for a place to camp and that you would like to sleep',
	'A short one',
];

/**
 * This is the building block of a story as a story consists of multiple nodes. It contains the title, text, and options for a node.
 *
 * It fetches the data from the backend and renders it.
 */

const PlayNode: FC<PlayNodeProps> = ({}) => {
	return (
		<Card className="flex flex-col h-fit w-full md:w-[70%] lg:w-[60%] xl:w-[50%] items-center justify-center gap-4 px-6 py-8 lg:border-2">
			<CardTitle>Trolls 'n stuff</CardTitle>
			<NodeTextContainer></NodeTextContainer>
			<NodeOptions options={dummyOptions}></NodeOptions>
		</Card>
	);
};

export default PlayNode;
