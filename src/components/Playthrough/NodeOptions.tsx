import React, { FC, ReactNode } from 'react';
import OptionButton from '../ui/buttons/OptionButton';

type NodeOptionsProps = {
	options?: string[];
};

const NodeOptions: FC<NodeOptionsProps> = ({ options }) => {
	return (
		<div className="flex h-[40%] w-full gap-2 flex-wrap">
			{options
				? options?.map(option => (
						<OptionButton
							className="w-[45%] h-full"
							onClick={() => console.log('Hello')}
						></OptionButton>
				  ))
				: renderFallBackOptions()}
		</div>
	);
};

export default NodeOptions;

function renderFallBackOptions(): ReactNode {
	return (
		<>
			<OptionButton className="w-[45%] h-full" onClick={() => console.log('Hello')}></OptionButton>
			<OptionButton className="w-[45%] h-full" onClick={() => console.log('Hello')}></OptionButton>
			<OptionButton className="w-[45%] h-full" onClick={() => console.log('Hello')}></OptionButton>
			<OptionButton className="w-[45%] h-full" onClick={() => console.log('Hello')}></OptionButton>
		</>
	);
}
