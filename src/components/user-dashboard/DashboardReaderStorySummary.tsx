import { Playthrough } from '@/pages/UserDashboardPage'
import React, { FC } from 'react'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import { Icons } from '../icons/Icons'
import getAgeIcon from '../icons/age-icons'
import { Textarea } from '../shadcn/ui/textarea'

type DashboardReaderStorySummaryProps = {
    playthrough?: Playthrough,
}

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ playthrough }) => {
  const renderDifficultyIcons = () => {
    if (playthrough?.story.difficulty) {
      const numberOfRenders = parseInt(playthrough?.story.difficulty)
      const iconArray = Array(numberOfRenders).fill(<></>).map((_, index) => (
        <StoryInfoElement icon={Icons.Skull} />
      ));
      return iconArray;
    } else {
      return <p>Ingen sværhedsgrad</p>
    }
  }

  const renderEncounterType = (input: string) => {
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
  
  return (
    <Card className='flex flex-col border-2 items-center p-2'>
      <Card className='h-fit text-2xl mb-3'>
        {playthrough?.story.title}
      </Card>
      <Card className='flex flex-row gap-6 text-lg mb-2'>
        <Card className='flex flex-row gap-2'>
          Sværhedsgrad:
          <Card className='flex'>{renderDifficultyIcons()}</Card>
        </Card>
        <Card className='flex flex-row gap-2'>
          Alder: 
          <StoryInfoElement
            icon={getAgeIcon(playthrough?.story.targetAge ? playthrough?.story.targetAge : 4)}
            description={`Recommended age: ${playthrough?.story.targetAge || 6}+`}
            isAgeIcon
            className="justify-center"
          />
        </Card>
      </Card>
      <Card className='flex flex-row gap-6 text-lg mb-2'>
        <Card>
          {renderEncounterType(playthrough?.currentNode.encounterType ? playthrough?.currentNode.encounterType : "")}
        </Card>
        <Card>
          {playthrough?.currentNode.title}
        </Card>
      </Card>
      <Card className='flex flex-row gap-6 text-lg w-full'>
        <Textarea value={playthrough?.currentNode.storyText} readOnly />
      </Card>
    </Card>
  )
}

export default DashboardReaderStorySummary