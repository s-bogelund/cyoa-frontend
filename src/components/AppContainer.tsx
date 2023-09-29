import React, { FC, HTMLProps } from 'react';
import NavigationBar from './NavigationBar';

const navbarElements = [
	{
		text: 'Home',
		linkTo: '/',
	},
	{
		text: 'NodeTest',
		linkTo: '/node',
	},
	{
		text: 'StoryPageTest',
		linkTo: '/story-page',
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
