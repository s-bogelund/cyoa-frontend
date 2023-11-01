import { Edge, Node } from 'reactflow';

export const gameInfos: GameInfo[] = [
	{ title: 'Moonlit Sorcery', age: 4, rating: 1.2, completionTime: 1, difficulty: 1 },
	{ title: 'Chronicles of the Lost Planet', age: 6, rating: 2.6, completionTime: 2, difficulty: 2 },
	{ title: 'The Wizard’s Enigma', age: 8, rating: 3.2, completionTime: 3, difficulty: 3 },
	{ title: 'Ghosts of the Nebula', age: 10, rating: 4.8, completionTime: 4, difficulty: 1 },
	{
		title: 'Dragons in the Ether and other stuff to make it longer',
		age: 12,
		rating: 4.9,
		completionTime: 5,
		difficulty: 2,
	},
	{ title: 'Echoes from the Abyss', age: 14, rating: 1.9, completionTime: 6, difficulty: 3 },
	{ title: 'Forgotten Realms Reclaimed', age: 16, rating: 2.7, completionTime: 7, difficulty: 1 },
	{ title: 'Celestial Knights', age: 18, rating: 3.6, completionTime: 8, difficulty: 2 },
	{ title: 'Quest for the Mystic Relic', age: 4, rating: 4.1, completionTime: 9, difficulty: 3 },
	{ title: 'Guardians of the Starlight', age: 6, rating: 4.4, completionTime: 10, difficulty: 1 },
	{ title: 'Serpent’s Scale', age: 8, rating: 1.9, completionTime: 11, difficulty: 2 },
	{ title: 'Temporal Nexus', age: 10, rating: 2.9, completionTime: 12, difficulty: 3 },
	{ title: 'Winds of the Elders', age: 12, rating: 3.3, completionTime: 1, difficulty: 1 },
	{ title: 'Eclipsing Shadows', age: 14, rating: 4.5, completionTime: 2, difficulty: 2 },
	{ title: 'Oaths in the Dark', age: 16, rating: 4.6, completionTime: 3, difficulty: 3 },
];

const position = { x: 0, y: 0 };

export const initialNodes: Node[] = [
	{
		id: '1',
		type: 'testNode',
		data: { label: 'Input' },
		position: { x: 250, y: -35 },
	},
	{
		id: '2',
		type: 'testNode',
		data: { label: 'Default' },
		position: { x: 100, y: 125 },
	},
	{
		id: '3',
		type: 'testNode',
		data: { label: 'Output' },
		position: { x: 250, y: 250 },
	},
	{
		id: '4',
		type: 'testNode',
		data: { label: 'New Node 1' },
		position: { x: 300, y: 300 },
	},
	{
		id: '5',
		type: 'testNode',
		data: { label: 'New Node 2' },
		position: { x: 350, y: 350 },
	},
	{
		id: '6',
		type: 'testNode',
		data: { label: 'New Node 3' },
		position: { x: 400, y: 400 },
	},
	{
		id: '7',
		type: 'testNode',
		data: { label: 'New Node 4' },
		position: { x: 450, y: 450 },
	},
	{
		id: '8',
		type: 'testNode',
		data: { label: 'New Node 5' },
		position: { x: 500, y: 500 },
	},
];

export const initialEdges: Edge[] = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e2-3', source: '2', target: '3' },
	{ id: 'e1-4', source: '1', target: '4' },
	{ id: 'e1-5', source: '1', target: '5' },
	{ id: 'e1-6', source: '1', target: '6' },
	{ id: 'e1-7', source: '1', target: '7' },
	{ id: 'e1-8', source: '1', target: '8' },
] as Edge[];
