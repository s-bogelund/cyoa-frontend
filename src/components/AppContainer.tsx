import React, { FC, HTMLProps } from 'react';

import NavigationBar from './NavigationBar';

const navbarElements = [
	{
		text: 'Home',
		linkTo: '/',
	},
	{
		text: 'StoryPageView',
		linkTo: '/story-page',
	},
	{
		text: 'SearchPageView',
		linkTo: '/browse',
	},
	{
		text: 'GraphTestView',
		linkTo: '/graph',
	},
	{
		text: 'WriterStorySummary',
		linkTo: '/writer-summary',
	},
];

const AppContainer: FC<HTMLProps<HTMLDivElement>> = ({ children }) => {
	return (
		<div className="grid grid-rows-[minmax(100vh,auto)] w-full">
			<NavigationBar elements={navbarElements} />
			{children}
		</div>
	);
};

export default AppContainer;
