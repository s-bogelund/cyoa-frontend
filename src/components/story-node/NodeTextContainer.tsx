import React, { FC } from 'react';

import { CardContent } from '../shadcn/ui/card';

type NodeTextContainerProps = {};

const NodeTextContainer: FC<NodeTextContainerProps> = ({}) => {
	const htmlString = `You are walking through the forest, looking for a place to camp for the night. You hear a
	loud snort and a rustle of leaves behind you. You turn around and see a large, hairy
	creature standing on two legs. It has a long nose, pointed ears, and yellow eyes. It is holding a wooden club in one hand and a sack of mushrooms in the other. It is a troll! You
	freeze in fear, wondering what to do.
	<br>
	The troll notices you and grunts. “Who are you? What
	are you doing in my forest?” it says in a deep voice. You try to think of a way to answer.
	You have heard stories about trolls, but you don’t know if they are friendly or not.
	<br>
	<br>
	
	What do	you do?`;

	return <CardContent dangerouslySetInnerHTML={{ __html: htmlString }}></CardContent>;
};

export default NodeTextContainer;
