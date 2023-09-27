import React, { FC } from 'react';
import NodeTextContainer from './NodeTextContainer';
import NodeOptions from './NodeOptions';
import PageContainer from '../ui/PageContainer';

type NodeProps = {};

const Node: FC<NodeProps> = ({}) => {
	return (
		<PageContainer>
			<div className="flex flex-col h-full w-full md:w-[70%] lg:w-[50%] xl:w-[] items-center justify-center gap-4">
				<NodeTextContainer></NodeTextContainer>
				<NodeOptions></NodeOptions>
			</div>
		</PageContainer>
	);
};

export default Node;
