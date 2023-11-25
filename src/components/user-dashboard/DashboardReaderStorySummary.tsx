import { useQuery } from '@apollo/client'
import React, { FC } from 'react'

import GET_NODE_AND_STORY_FOR_SUMMARY, { GetNodeAndStoryForSummaryQueryResult } from '@/api/queries/getNodeAndStoryForSummary'

import { Icons } from '../icons/Icons'
import { Card } from '../shadcn/ui/card'
import { Textarea } from '../shadcn/ui/textarea'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import ReaderStoryElements from './ReaderStoryElements'

type DashboardReaderStorySummaryProps = {
    currentNodeId: string
}

// TODO: Create query that fetches the story and current node of the playthrough.
// TODO: Change parameters in the code to fit the new story and currentNode

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ currentNodeId }) => {

	const { loading, error, data } = useQuery<GetNodeAndStoryForSummaryQueryResult>(
    GET_NODE_AND_STORY_FOR_SUMMARY,
    { variables: { idInput: currentNodeId }}
  );

  // TODO: Double queries can be merged, by filtering the resulting data array, if all storynodes are queried
  // TODO: This way I will only need a single query
  
  
  // Fire query that fetches story and currentNode based on ID's given from playthrough
  // Query should replace dummy data
  
  if (loading ) {
    console.log("loading", loading)
    return <p>Loading...</p>;
  } 
	if (error) {
    console.log("error", error)
    return <p>Error: {error?.message}</p>;
  }
  if (data) {
    console.log("Component should render", data)
    return (
      <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {data.storyNode.story?.title}
      </Card>
      <ReaderStoryElements storyNode={data.storyNode} />
      <Card className='flex gap-6 text-lg w-full'>
        <Textarea
          value={"tekst her"}
          readOnly
          />
      </Card>
    </Card>
  )
} 
}

export default DashboardReaderStorySummary