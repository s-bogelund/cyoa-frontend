import React, { FC, HTMLProps } from 'react';

const PageContainer: FC<HTMLProps<HTMLDivElement>> = ({ children }) => {
	return (
		<div className="flex flex-col h-full justify-center items-center px-6 py-10 ">{children}</div>
	);
};

export default PageContainer;
