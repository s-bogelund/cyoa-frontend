import React, { FC, HTMLProps } from 'react';

const PageContainer: FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
	return (
		<div
			className="flex flex-col h-full items-center px-1 py-2 md:px-6 md:pt-20 md:pb-8 bg-transparent"
			{...props}
		>
			{children}
		</div>
	);
};

export default PageContainer;
