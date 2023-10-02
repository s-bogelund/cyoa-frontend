import React, { FC } from 'react';

import { TooltipComponent, TooltipContent, TooltipTrigger } from '@/components/shadcn/ui/tooltip';

type TooltipProps = {
	text: string;
	children: React.ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ text, children }) => {
	return (
		<TooltipComponent>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent>
				<p>{text}</p>
			</TooltipContent>
		</TooltipComponent>
	);
};

export default Tooltip;
