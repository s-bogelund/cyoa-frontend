import React, { FC, HTMLProps } from 'react';

const PageContainer: FC<HTMLProps<HTMLDivElement>> = ({ children }) => {
	return (
		<div className="flex flex-col h-full items-center px-1 py-2 md:px-6 md:py-10 ">{children}</div>
	);
};

export default PageContainer;
