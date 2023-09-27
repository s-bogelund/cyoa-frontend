import React, { FC } from 'react';
import NodeTextContainer from './NodeTextContainer';
import NodeOptions from './NodeOptions';
import PageContainer from '../ui/PageContainer';
import { Card, CardTitle } from '../ui/card';

type NodeProps = {};

const dummyOptions = [
	'This is a very long Option One that certainly exceeds the seventy-five ',
	"Here's another Option Two that is also designed to be longer than ",
	'Tell the troll your name and that you are looking for a place to camp and that you would like to sleep',
	'A short one',
];

// Usage
<NodeOptions options={dummyOptions} />;

/**
 * This is the building block of a story as a story consists of multiple nodes. It contains the title, text, and options for a node.
 *
 * It fetches the data from the backend and renders it.
 */

const Node: FC<NodeProps> = ({}) => {
	return (
		<PageContainer>
			<Card className="flex flex-col h-fit w-full md:w-[70%] lg:w-[60%] xl:w-[50%] items-center justify-center gap-4 px-6 py-8">
				<CardTitle>Trolls 'n stuff</CardTitle>
				<NodeTextContainer></NodeTextContainer>
				<NodeOptions options={dummyOptions}></NodeOptions>
			</Card>
		</PageContainer>
	);
};

export default Node;
