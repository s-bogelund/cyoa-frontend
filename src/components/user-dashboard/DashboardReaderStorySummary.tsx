import { useQuery } from '@apollo/client'
import { FC, useEffect } from 'react'

import GET_NODE_AND_STORY_FOR_SUMMARY, { GetNodeAndStoryForSummaryQueryResult } from '@/api/queries/getNodeAndStoryForSummary'

import { Card } from '../shadcn/ui/card'
import { Textarea } from '../shadcn/ui/textarea'
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
  
  if (loading) {
    console.log("loading", loading)
    return <p>Loading...</p>;
  } 
	if (error) {
    console.log("error", error)
    return <p>Error: {error?.message}</p>;
  }
  if (data) {
    const storyNode = data.storyNodes[0];
    return (
      <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {data.storyNodes[0].story?.title}
      </Card>
      <ReaderStoryElements storyNode={storyNode} />
      <Card className='flex gap-6 text-lg w-full'>
        <Textarea
          value={storyNode.storyText ? storyNode.storyText : ""}
          readOnly
          />
      </Card>
    </Card>
  )
} 
}

export default DashboardReaderStorySummary