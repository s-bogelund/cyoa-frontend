import React, { FC, ReactNode } from 'react';
import OptionButton from '../OptionButton';

type NodeOptionsProps = {
	options?: string[];
};

const NodeOptions: FC<NodeOptionsProps> = ({ options }) => {
	let gridClass =
		options && options.length % 2
			? `grid-cols-1 grid-rows-${options.length} sm:grid-rows-2 sm:grid-cols-2`
			: 'grid-rows-2 grid-cols-2 ';

	return (
		<div className={`grid h-fit w-full gap-2 ${gridClass}`}>
			{options
				? options.map((option, index) => (
						<OptionButton key={index} onClick={() => console.log('Hello')} className="">
							{option}
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
