import { RFState } from '@/graphStore';

export const saveGraphStateLS = (graphState: RFState) => {
	localStorage.setItem('graphState', JSON.stringify(graphState));
};

export const loadGraphStateLS = (): RFState | undefined => {
	const graphState = localStorage.getItem('graphState');
	if (graphState) {
		return JSON.parse(graphState);
	}
	return undefined;
};
