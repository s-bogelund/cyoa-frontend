import React, { FC } from 'react'

import { Icons } from '../icons/Icons'
import { Card } from '../shadcn/ui/card'
import { Textarea } from '../shadcn/ui/textarea'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import ReaderStoryElements from './ReaderStoryElements'
import GET_STORY_FOR_SUMMARY, { GetStoryForSummaryQueryResult } from '@/api/queries/getStoryForSummary'
import { useQuery } from '@apollo/client'
import GET_STORY_NODE_FOR_SUMMARY, { GetStoryNodeForSummaryQueryResult } from '@/api/queries/getStoryNodeForSummary'

type DashboardReaderStorySummaryProps = {
    storyId: string,
    currentNodeId: string
}

export const renderDifficultyIcons = (input: number) => {
  if (input) {
    const iconArray = Array(input).fill(<></>).map((_, index) => (
      <StoryInfoElement icon={Icons.Skull} />
    ));
    return iconArray;
  } else {
    return <p>Ingen sværhedsgrad</p>
  }
}

export const renderEncounterType = (input: string) => {
  switch (input) {
    case "Story": {
      // TODO: Change icon to corrent one
      return <StoryInfoElement icon={Icons.Clock} />
    }
    case "Fight": {
      // TODO: Change icon to corrent one
      return <StoryInfoElement icon={Icons.Playtime} />
    }
    case "Death": {
      // TODO: Change icon to corrent one
      return <StoryInfoElement icon={Icons.Skull} />
    }
    case "Other": {
      // TODO: Change icon to corrent one
      return <StoryInfoElement icon={Icons.Nodes} />
    }
    default: {
      return <StoryInfoElement icon={Icons.GitHub} />
    }
  }
}

// TODO: Create query that fetches the story and current node of the playthrough.
// TODO: Change parameters in the code to fit the new story and currentNode

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ storyId, currentNodeId }) => {

	const { loading: loadingStory, error: errorStory, data: dataStory } = useQuery<GetStoryForSummaryQueryResult>(
    GET_STORY_FOR_SUMMARY,
    {variables: { idInput: storyId }}
  );

  const {loading: loadingCurrentNode, error: errorCurrentNode, data: dataCurrentNode} = useQuery<GetStoryNodeForSummaryQueryResult>(
    GET_STORY_NODE_FOR_SUMMARY,
    {variables: { idInput: currentNodeId }}
  );

  // TODO: Double queries can be merged, by filtering the resulting data array, if all storynodes are queried
  // TODO: This way I will only need a single query
  
  
  // Fire query that fetches story and currentNode based on ID's given from playthrough
  // Query should replace dummy data
  
  if (loadingStory || loadingCurrentNode) {
    console.log("loading", loadingStory, loadingCurrentNode)
    return <p>Loading...</p>;
  } 
	if (errorStory || errorCurrentNode){
    console.log("error", errorStory, errorCurrentNode)
    return <p>Error: {errorStory?.message ? errorStory?.message : errorCurrentNode?.message}</p>;
  } 
  if (!dataStory || !dataCurrentNode) {
    console.log("No data", dataStory, dataCurrentNode)
    return <p>Something went wrong</p>
  } 
  if (dataStory && dataCurrentNode) {
    console.log("Component should render", dataStory, dataCurrentNode)
    return (
      <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {dataStory?.story.title}
      </Card>
      <ReaderStoryElements story={dataStory} storyNode={dataCurrentNode} />
      <Card className='flex gap-6 text-lg w-full'>
        <Textarea
          value={dataCurrentNode.storyNode.storyText ? dataCurrentNode.storyNode.storyText : "Ingen tekst"}
          readOnly
          />
      </Card>
    </Card>
  )
} 
}

export default DashboardReaderStorySummary