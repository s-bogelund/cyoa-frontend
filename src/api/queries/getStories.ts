// import { gql } from '@apollo/client';

// const GET_STORIES = gql`
// 	query GetAllStories {
// 		stories {
// 			id
// 			title
// 			difficulty
// 			targetAge
// 			user {
// 				id
// 				firstName
// 				lastName
// 				# ... other User fields
// 			}
// 			storyNodes {
// 				id
// 				title
// 				storyText
// 				encounterType
// 				isCheckpoint
// 				storyNodeOptions {
// 					id
// 					destinationNode
// 					optionText
// 					condition
// 					# ... other StoryNodeOption fields
// 				}
// 				combatDatas {
// 					id
// 					diceType
// 					isDiceRollRequired
// 					# ... other CombatData fields
// 				}
// 				storyNodeDeathStatistics {
// 					id
// 					deathCount
// 					# ... other StoryNodeDeathStatistic fields
// 				}
// 				visitedStoryNodes {
// 					id
// 					previousNode
// 					# ... other VisitedStoryNode fields
// 				}
// 			}
// 			ratings {
// 				id
// 				ratingValue
// 				# ... other Rating fields
// 			}
// 			playthroughs {
// 				id
// 				currentNode
// 				isOngoing
// 				isCompleted
// 				isPlayerDead
// 				# ... other Playthrough fields
// 			}
// 		}
// 	}
// `;

// export default GET_STORIES;
