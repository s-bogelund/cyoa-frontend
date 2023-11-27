import React, { FC, ReactNode } from 'react';

import OptionButton from './OptionButton';
import { StoryNodeOption } from '@/gql/graphql';
import { useNavigate } from 'react-router-dom';

type NodeOptionsProps = {
	options?: StoryNodeOption[];
};

const NodeOptions: FC<NodeOptionsProps> = ({ options }) => {
	const navigate = useNavigate();
	let gridClass =
		options && options.length % 2
			? `grid-cols-1 grid-rows-${options.length} sm:grid-rows-2 sm:grid-cols-2`
			: 'grid-rows-2 grid-cols-2 ';

	return (
		<div className={`grid h-fit w-full gap-2 ${gridClass}`}>
			{options
				? options.map((option, index) => (
						<OptionButton key={index} onClick={() => navigate({
							pathname: "/playnode",
							search: `?storyNodeId=${option.destinationNode}`
						})}>
							{option.optionText}
						</OptionButton>
				  ))
				: renderFallBackOptions()}
		</div>
	);
};

export default NodeOptions;

function renderFallBackOptions(): ReactNode {
	return (
		<>
			<OptionButton className="w-full h-full" onClick={() => console.log('Hello')}></OptionButton>
			<OptionButton className="w-full h-full" onClick={() => console.log('Hello')}></OptionButton>
			<OptionButton className="w-full h-full" onClick={() => console.log('Hello')}></OptionButton>
			{/* <OptionButton className="w-full h-full" onClick={() => console.log('Hello')}></OptionButton> */}
		</>
	);
}
