import React, { FC, HTMLProps } from 'react';

const AppContainer: FC<HTMLProps<HTMLDivElement>> = ({ children }) => {
	return <div className="grid grid-rows-[minmax(100vh,auto)] w-full">{children}</div>;
};

export default AppContainer;
