
import { ExtendedNode } from '@/types/graphTypes';

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

// Dummy nodes data
export const nodes: ExtendedNode[] = [
	{
		id: '1',
		type: 'testNode',
		position: { x: 250, y: 5 },
		data: {
			id: '1',
			title: 'Start',
			storyText: 'The adventure begins...',
			encounterType: 'conversation',
			isCheckpoint: true,
		},
	},
	{
		id: '2',
		type: 'testNode',
		position: { x: 100, y: 100 },
		data: {
			id: '2',
			title: 'Crossroad',
			storyText: 'You arrive at a crossroad.',
			encounterType: 'combat',
			isCheckpoint: false,
		},
	},
	{
		id: '3',
		type: 'testNode',
		position: { x: 400, y: 100 },
		data: {
			id: '3',
			title: 'Old Tree',
			storyText: 'A mysterious tree whispers secrets of the past.',
			encounterType: 'conversation',
			isCheckpoint: false,
		},
	},
	{
		id: '4',
		type: 'testNode',
		position: { x: 250, y: 200 },
		data: {
			id: '4',
			title: 'Cave Entrance',
			storyText: 'A dark cave looms before you. Dare you enter?',
			encounterType: 'death',
			isCheckpoint: false,
		},
	},
];

// Dummy edges data
const edges: Edge[] = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e1-3', source: '1', target: '3' },
	{ id: 'e2-4', source: '2', target: '4' },
	{ id: 'e3-4', source: '3', target: '4' },
];

// Combine nodes and edges into a graph structure
export const dummyGraph = {
	nodes,
	edges,
};

export const jsonGraph = {
	nodes: [
		{
			id: '1',
			type: 'testNode',
			data: {
				label: 'Input',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
		},
		{
			id: '2',
			type: 'testNode',
			data: {
				label: 'Default',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
		},
		{
			id: '3',
			type: 'testNode',
			data: {
				label: 'Output',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
		},
		{
			id: '6',
			type: 'testNode',
			data: {
				label: 'New Node 3',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '7',
			type: 'testNode',
			data: {
				label: 'New Node 4',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8',
			type: 'testNode',
			data: {
				label: 'New Node 5',
			},
			position: {
				x: 0,
				y: 0,
			},
			width: 120,
			height: 90,
		},
		{
			id: '7.470351436911211',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '6.397244669685012',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 520,
				y: 362,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 520,
				y: 362,
			},
		},
		{
			id: '7.9338828263778325',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '6.041845738926898',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '6.987934978203109',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8.277797138933327',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '6.644332301578034',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '6.874065095853686',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '8.408445183674427',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '7.686905213098482',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8.380990267668944',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '7.916018784070067',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '9.01889777249754',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8.814548260132751',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '9.512505524886453',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8.009360432455582',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '8.055187702178591',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '7.9792670332725955',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '7.383647633404726',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 977.4142135623731,
				y: 930,
			},
			width: 120,
			height: 90,
			selected: false,
			positionAbsolute: {
				x: 977.4142135623731,
				y: 930,
			},
			dragging: false,
		},
		{
			id: '9.735822132925646',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '8.44880512815095',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 1204,
				y: 1180,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 1204,
				y: 1180,
			},
		},
		{
			id: '9.88420634606927',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.14478239179535',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.652132558630687',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 1205.414213562373,
				y: 426,
			},
			width: 120,
			height: 90,
			selected: false,
			positionAbsolute: {
				x: 1205.414213562373,
				y: 426,
			},
			dragging: false,
		},
		{
			id: '9.368823877553037',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.022385475923452',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.240201495516322',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.261423284247751',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '11.668338757698088',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.850190263957014',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.320280599241741',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.558337007554341',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '12.593667695248477',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '12.472029204820178',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.894988775512946',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '12.704097973367544',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '11.938275035923523',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '13.69330559794879',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '11.950282548548174',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '12.744740380205625',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.709992155104153',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.948476455448208',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '10.115787968679646',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '9.605917010115743',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '13.897201728714679',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '15.207585753100055',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 2344,
				y: 865,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 2344,
				y: 865,
			},
		},
		{
			id: '13.768988910807638',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '14.092067819829222',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '14.518751778725074',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '15.12384176750291',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '13.95483020793533',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '14.491830626379596',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '17.131732581363114',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '17.178574345718385',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 2574,
				y: 615,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 2574,
				y: 615,
			},
		},
		{
			id: '15.480838278448235',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '16.126504760568203',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '17.443239821322734',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.667928221219327',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '17.584555501933746',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '19.932326102566627',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '20.592961407111602',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '19.98794531992607',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '20.044809917816146',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 3258,
				y: 237,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 3258,
				y: 237,
			},
		},
		{
			id: '21.684750647092926',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '20.711299455058892',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '22.305254369330562',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '22.501809033270874',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '22.328913399475418',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 3940,
				y: 109,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 3940,
				y: 109,
			},
		},
		{
			id: '23.529566312140386',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '22.812731843304185',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '24.00008588860802',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '22.797299531692286',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '24.487787399727832',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '23.646690594955167',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '15.125100396311193',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '15.209690699533096',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '15.763841586287855',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '14.916779750221377',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '16.115501648802923',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
		},
		{
			id: '18.10101946465758',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '17.585012885165494',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 3258,
				y: 1245,
			},
			width: 120,
			height: 90,
			selected: false,
			dragging: false,
			positionAbsolute: {
				x: 3258,
				y: 1245,
			},
		},
		{
			id: '17.917545001620976',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '16.123374554095854',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.015788006527163',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '17.678624659990565',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '17.797912606948014',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 3486,
				y: 1306,
			},
			width: 120,
			height: 90,
			selected: true,
			dragging: false,
			positionAbsolute: {
				x: 3486,
				y: 1306,
			},
		},
		{
			id: '19.327837156195326',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.335195908829895',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.779828772386857',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.04184632031712',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
			width: 120,
			height: 90,
		},
		{
			id: '18.46046501428274',
			type: 'testNode',
			data: {
				label: 'New Node',
			},
			position: {
				x: 300,
				y: 300,
			},
		},
	],
	edges: [
		{
			id: 'e1-2',
			source: '1',
			target: '2',
		},
		{
			id: 'e2-3',
			source: '2',
			target: '3',
		},

		{
			id: 'e1-6',
			source: '1',
			target: '6',
		},
		{
			id: 'e1-7',
			source: '1',
			target: '7',
		},
		{
			id: 'e1-8',
			source: '1',
			target: '8',
		},
		{
			id: '6-7.470351436911211',
			source: '6',
			target: '7.470351436911211',
		},
		{
			id: '6-6.397244669685012',
			source: '6',
			target: '6.397244669685012',
		},
		{
			id: '6-7.9338828263778325',
			source: '6',
			target: '7.9338828263778325',
		},
		{
			id: '6-6.041845738926898',
			source: '6',
			target: '6.041845738926898',
		},
		{
			id: '6.397244669685012-6.987934978203109',
			source: '6.397244669685012',
			target: '6.987934978203109',
		},
		{
			id: '6.397244669685012-8.277797138933327',
			source: '6.397244669685012',
			target: '8.277797138933327',
		},
		{
			id: '6.397244669685012-6.644332301578034',
			source: '6.397244669685012',
			target: '6.644332301578034',
		},
		{
			id: '6.397244669685012-6.874065095853686',
			source: '6.397244669685012',
			target: '6.874065095853686',
		},
		{
			id: '7.470351436911211-8.408445183674427',
			source: '7.470351436911211',
			target: '8.408445183674427',
		},
		{
			id: '7.470351436911211-7.686905213098482',
			source: '7.470351436911211',
			target: '7.686905213098482',
		},
		{
			id: '7.470351436911211-8.380990267668944',
			source: '7.470351436911211',
			target: '8.380990267668944',
		},
		{
			id: '7.470351436911211-7.916018784070067',
			source: '7.470351436911211',
			target: '7.916018784070067',
		},
		{
			id: '7.916018784070067-9.01889777249754',
			source: '7.916018784070067',
			target: '9.01889777249754',
		},
		{
			id: '6.874065095853686-8.814548260132751',
			source: '6.874065095853686',
			target: '8.814548260132751',
		},
		{
			id: '7.916018784070067-9.512505524886453',
			source: '7.916018784070067',
			target: '9.512505524886453',
		},
		{
			id: '7.916018784070067-8.009360432455582',
			source: '7.916018784070067',
			target: '8.009360432455582',
		},
		{
			id: '6.644332301578034-8.055187702178591',
			source: '6.644332301578034',
			target: '8.055187702178591',
		},
		{
			id: '6.644332301578034-7.9792670332725955',
			source: '6.644332301578034',
			target: '7.9792670332725955',
		},
		{
			id: '6.644332301578034-7.383647633404726',
			source: '6.644332301578034',
			target: '7.383647633404726',
		},
		{
			id: '7.9792670332725955-9.735822132925646',
			source: '7.9792670332725955',
			target: '9.735822132925646',
		},
		{
			id: '7.9792670332725955-8.44880512815095',
			source: '7.9792670332725955',
			target: '8.44880512815095',
		},
		{
			id: '8.055187702178591-9.88420634606927',
			source: '8.055187702178591',
			target: '9.88420634606927',
		},
		{
			id: '8.055187702178591-9.14478239179535',
			source: '8.055187702178591',
			target: '9.14478239179535',
		},
		{
			id: '8.009360432455582-9.652132558630687',
			source: '8.009360432455582',
			target: '9.652132558630687',
		},
		{
			id: '8.009360432455582-9.368823877553037',
			source: '8.009360432455582',
			target: '9.368823877553037',
		},
		{
			id: '8.009360432455582-9.022385475923452',
			source: '8.009360432455582',
			target: '9.022385475923452',
		},
		{
			id: '9.652132558630687-11.240201495516322',
			source: '9.652132558630687',
			target: '11.240201495516322',
		},
		{
			id: '9.652132558630687-11.261423284247751',
			source: '9.652132558630687',
			target: '11.261423284247751',
		},
		{
			id: '11.261423284247751-11.668338757698088',
			source: '11.261423284247751',
			target: '11.668338757698088',
		},
		{
			id: '11.261423284247751-11.850190263957014',
			source: '11.261423284247751',
			target: '11.850190263957014',
		},
		{
			id: '11.261423284247751-11.320280599241741',
			source: '11.261423284247751',
			target: '11.320280599241741',
		},
		{
			id: '11.261423284247751-11.558337007554341',
			source: '11.261423284247751',
			target: '11.558337007554341',
		},
		{
			id: '11.558337007554341-12.593667695248477',
			source: '11.558337007554341',
			target: '12.593667695248477',
		},
		{
			id: '11.558337007554341-12.472029204820178',
			source: '11.558337007554341',
			target: '12.472029204820178',
		},
		{
			id: '11.558337007554341-11.894988775512946',
			source: '11.558337007554341',
			target: '11.894988775512946',
		},
		{
			id: '11.558337007554341-12.704097973367544',
			source: '11.558337007554341',
			target: '12.704097973367544',
		},
		{
			id: '11.894988775512946-11.938275035923523',
			source: '11.894988775512946',
			target: '11.938275035923523',
		},
		{
			id: '11.894988775512946-13.69330559794879',
			source: '11.894988775512946',
			target: '13.69330559794879',
		},
		{
			id: '11.894988775512946-11.950282548548174',
			source: '11.894988775512946',
			target: '11.950282548548174',
		},
		{
			id: '11.894988775512946-12.744740380205625',
			source: '11.894988775512946',
			target: '12.744740380205625',
		},
		{
			id: '8.44880512815095-9.709992155104153',
			source: '8.44880512815095',
			target: '9.709992155104153',
		},
		{
			id: '8.44880512815095-9.948476455448208',
			source: '8.44880512815095',
			target: '9.948476455448208',
		},
		{
			id: '8.44880512815095-10.115787968679646',
			source: '8.44880512815095',
			target: '10.115787968679646',
		},
		{
			id: '8.44880512815095-9.605917010115743',
			source: '8.44880512815095',
			target: '9.605917010115743',
		},
		{
			id: '13.69330559794879-13.897201728714679',
			source: '13.69330559794879',
			target: '13.897201728714679',
		},
		{
			id: '13.69330559794879-15.207585753100055',
			source: '13.69330559794879',
			target: '15.207585753100055',
		},
		{
			id: '13.69330559794879-13.768988910807638',
			source: '13.69330559794879',
			target: '13.768988910807638',
		},
		{
			id: '13.69330559794879-14.092067819829222',
			source: '13.69330559794879',
			target: '14.092067819829222',
		},
		{
			id: '13.768988910807638-14.518751778725074',
			source: '13.768988910807638',
			target: '14.518751778725074',
		},
		{
			id: '13.768988910807638-15.12384176750291',
			source: '13.768988910807638',
			target: '15.12384176750291',
		},
		{
			id: '13.768988910807638-13.95483020793533',
			source: '13.768988910807638',
			target: '13.95483020793533',
		},
		{
			id: '13.768988910807638-14.491830626379596',
			source: '13.768988910807638',
			target: '14.491830626379596',
		},
		{
			id: '15.207585753100055-17.131732581363114',
			source: '15.207585753100055',
			target: '17.131732581363114',
		},
		{
			id: '15.207585753100055-17.178574345718385',
			source: '15.207585753100055',
			target: '17.178574345718385',
		},
		{
			id: '15.207585753100055-15.480838278448235',
			source: '15.207585753100055',
			target: '15.480838278448235',
		},
		{
			id: '15.207585753100055-16.126504760568203',
			source: '15.207585753100055',
			target: '16.126504760568203',
		},
		{
			id: '17.178574345718385-17.443239821322734',
			source: '17.178574345718385',
			target: '17.443239821322734',
		},
		{
			id: '17.178574345718385-18.667928221219327',
			source: '17.178574345718385',
			target: '18.667928221219327',
		},
		{
			id: '17.178574345718385-17.584555501933746',
			source: '17.178574345718385',
			target: '17.584555501933746',
		},
		{
			id: '18.667928221219327-19.932326102566627',
			source: '18.667928221219327',
			target: '19.932326102566627',
		},
		{
			id: '18.667928221219327-20.592961407111602',
			source: '18.667928221219327',
			target: '20.592961407111602',
		},
		{
			id: '18.667928221219327-19.98794531992607',
			source: '18.667928221219327',
			target: '19.98794531992607',
		},
		{
			id: '19.932326102566627-20.044809917816146',
			source: '19.932326102566627',
			target: '20.044809917816146',
		},
		{
			id: '19.932326102566627-21.684750647092926',
			source: '19.932326102566627',
			target: '21.684750647092926',
		},
		{
			id: '20.044809917816146-20.711299455058892',
			source: '20.044809917816146',
			target: '20.711299455058892',
		},
		{
			id: '20.711299455058892-22.305254369330562',
			source: '20.711299455058892',
			target: '22.305254369330562',
		},
		{
			id: '20.711299455058892-22.501809033270874',
			source: '20.711299455058892',
			target: '22.501809033270874',
		},
		{
			id: '22.305254369330562-22.328913399475418',
			source: '22.305254369330562',
			target: '22.328913399475418',
		},
		{
			id: '22.305254369330562-23.529566312140386',
			source: '22.305254369330562',
			target: '23.529566312140386',
		},
		{
			id: '22.328913399475418-22.812731843304185',
			source: '22.328913399475418',
			target: '22.812731843304185',
		},
		{
			id: '22.328913399475418-24.00008588860802',
			source: '22.328913399475418',
			target: '24.00008588860802',
		},
		{
			id: '22.328913399475418-22.797299531692286',
			source: '22.328913399475418',
			target: '22.797299531692286',
		},
		{
			id: '22.812731843304185-24.487787399727832',
			source: '22.812731843304185',
			target: '24.487787399727832',
		},
		{
			id: '22.812731843304185-23.646690594955167',
			source: '22.812731843304185',
			target: '23.646690594955167',
		},
		{
			id: '14.491830626379596-15.125100396311193',
			source: '14.491830626379596',
			target: '15.125100396311193',
		},
		{
			id: '14.491830626379596-15.209690699533096',
			source: '14.491830626379596',
			target: '15.209690699533096',
		},
		{
			id: '14.491830626379596-15.763841586287855',
			source: '14.491830626379596',
			target: '15.763841586287855',
		},
		{
			id: '14.491830626379596-14.916779750221377',
			source: '14.491830626379596',
			target: '14.916779750221377',
		},
		{
			id: '14.916779750221377-16.115501648802923',
			source: '14.916779750221377',
			target: '16.115501648802923',
		},
		{
			id: '16.115501648802923-18.10101946465758',
			source: '16.115501648802923',
			target: '18.10101946465758',
		},
		{
			id: '16.115501648802923-17.585012885165494',
			source: '16.115501648802923',
			target: '17.585012885165494',
		},
		{
			id: '16.115501648802923-17.917545001620976',
			source: '16.115501648802923',
			target: '17.917545001620976',
		},
		{
			id: '16.115501648802923-16.123374554095854',
			source: '16.115501648802923',
			target: '16.123374554095854',
		},
		{
			id: '17.585012885165494-18.015788006527163',
			source: '17.585012885165494',
			target: '18.015788006527163',
		},
		{
			id: '17.585012885165494-17.678624659990565',
			source: '17.585012885165494',
			target: '17.678624659990565',
		},
		{
			id: '17.585012885165494-17.797912606948014',
			source: '17.585012885165494',
			target: '17.797912606948014',
		},
		{
			id: '17.585012885165494-19.327837156195326',
			source: '17.585012885165494',
			target: '19.327837156195326',
		},
		{
			id: '17.797912606948014-18.335195908829895',
			source: '17.797912606948014',
			target: '18.335195908829895',
		},
		{
			id: '17.797912606948014-18.779828772386857',
			source: '17.797912606948014',
			target: '18.779828772386857',
		},
		{
			id: '17.797912606948014-18.04184632031712',
			source: '17.797912606948014',
			target: '18.04184632031712',
		},
		{
			id: '17.797912606948014-18.46046501428274',
			source: '17.797912606948014',
			target: '18.46046501428274',
		},
	],
};

export const initialNodes = jsonGraph.nodes.map(node => {
	return {
		...node,
		positionAbsolute: {
			x: node.position.x,
			y: node.position.y,
		},
	};
});

export const initialEdges = jsonGraph.edges.map(edge => {
	return {
		...edge,
	};
});
