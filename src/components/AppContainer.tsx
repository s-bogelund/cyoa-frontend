import React, { FC, HTMLProps } from 'react';

import NavigationBar from './NavigationBar';

const navbarElements = [
	{
		text: 'Home',
		linkTo: '/',
	},
	{
		text: 'NodeView',
		linkTo: '/node',
	},
	{
		text: 'StoryPageView',
		linkTo: '/story-page',
	},
	{
		text: 'SearchPageView',
		linkTo: '/search-story',
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
