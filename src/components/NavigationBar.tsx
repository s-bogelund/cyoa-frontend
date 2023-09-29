'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/shadcn/ui/navigation-menu';
import { Link } from 'react-router-dom';

export type NavigationBarElement = {
	text: string;
	linkTo: string;
};

export type NavigationBarProps = {
	elements?: NavigationBarElement[];
};

const NavigationBar: React.FC<NavigationBarProps> = ({ elements }) => {
	console.log(elements);

	return (
		<div className="fixed hidden md:flex top-0 left-0 w-full z-50 mb-10">
			<NavigationMenu>
				<NavigationMenuList>
					{elements
						? elements.map(element => (
								<NavigationMenuItem className={navigationMenuTriggerStyle()} key={element.linkTo}>
									<Link to={element.linkTo}>{element.text}</Link>
								</NavigationMenuItem>
						  ))
						: null}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default NavigationBar;
