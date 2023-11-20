import React, { FC } from 'react'

import { Playthrough } from '@/pages/UserDashboardPage'

import { Icons } from '../icons/Icons'
import { Card } from '../shadcn/ui/card'
import { Textarea } from '../shadcn/ui/textarea'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import ReaderStoryElements from './ReaderStoryElements'

type DashboardReaderStorySummaryProps = {
    playthrough?: Playthrough,
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

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ playthrough }) => {
  return (
    <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {playthrough?.story.title}
      </Card>
      <ReaderStoryElements story={playthrough?.story} storyNode={playthrough?.currentNode} />
      <Card className='flex gap-6 text-lg w-full'>
        <Textarea
          value={playthrough?.currentNode.storyText}
          readOnly
        />
      </Card>
    </Card>
  )
}

export default DashboardReaderStorySummary