import React, { FC } from 'react'

import { Playthrough, Story, StoryNode } from '@/pages/UserDashboardPage'

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

const story: Story = {
  id: "123123123",
  title: "Troldmanden fra Ildbjerget",
  difficulty: "3",
  targetAge: 10,
  playtime: 4,
  description: "Her er der en beskrivelse"
}

const currentNode: StoryNode = {
  id: "111",
  title: "Et samtale-afsnit",
  storyText: "Her kommer der til at stå en hel masse tekst, der gerne skulle blive kortet af, så brugeren kun ser en lille smule tekst og så 3 punktummer. Her kommer der til at stå en hel masse tekst, der gerne skulle blive kortet af, så brugeren kun ser en lille smule tekst og så 3 punktummer. Her kommer der til at stå en hel masse tekst, der gerne skulle blive kortet af, så brugeren kun ser en lille smule tekst og så 3 punktummer. Her kommer der til at stå en hel masse tekst, der gerne skulle blive kortet af, så brugeren kun ser en lille smule tekst og så 3 punktummer.",
  encounterType: "Samtale",
  isCheckpoint: true
}

// TODO: Create query that fetches the story and current node of the playthrough.
// TODO: Change parameters in the code to fit the new story and currentNode

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ playthrough }) => {

  const story = playthrough?.story;   // Replace with query, that is based on URL-parameters
  const currentNode = playthrough?.currentNode;   // Replace with query, that is based on URL-parameters
  
  // Fire query that fetches story and currentNode based on ID's given from playthrough
  // Query should replace dummy data

  return (
    <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {story?.title}
      </Card>
      <ReaderStoryElements story={story} storyNode={currentNode} />
      <Card className='flex gap-6 text-lg w-full'>
        <Textarea
          value={currentNode?.storyText}
          readOnly
        />
      </Card>
    </Card>
  )
}

export default DashboardReaderStorySummary