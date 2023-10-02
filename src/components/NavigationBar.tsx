import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/shadcn/ui/navigation-menu';

export type NavigationBarElement = {
	text: string;
	linkTo: string;
};

export type NavigationBarProps = {
	elements?: NavigationBarElement[];
};

const NavigationBar: React.FC<NavigationBarProps> = ({ elements }) => {
	const navigate = useNavigate();

	return (
		<div className="fixed hidden md:flex top-0 left-0 w-full z-50 mb-10">
			<NavigationMenu className="w-full">
				<NavigationMenuList>
					{elements
						? elements.map(element => (
								<NavigationMenuItem
									className={navigationMenuTriggerStyle()}
									key={element.linkTo}
									onClick={() => navigate(element.linkTo)}
								>
									{element.text}
								</NavigationMenuItem>
						  ))
						: null}
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu className="flex flex-1 justify-end mr-5">
				<NavigationMenuList className="">
					{/* TODO: Add auth-based view or something here */}
					<NavigationMenuItem
						className={navigationMenuTriggerStyle()}
						onClick={() => navigate('/login')}
					>
						LoginView
					</NavigationMenuItem>
					<NavigationMenuItem
						className={navigationMenuTriggerStyle()}
						onClick={() => navigate('/sign-up')}
					>
						SignUpView
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default NavigationBar;
