import { Playthrough } from '@/pages/UserDashboardPage'
import React, { FC } from 'react'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import { Icons } from '../icons/Icons'
import getAgeIcon from '../icons/age-icons'

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
  
  return (
    <Card className='flex flex-col border-2 items-center'>
      <Card className='h-fit text-2xl mb-3'>
        {playthrough?.story.title}
      </Card>
      <Card className='flex flex-row gap-12 text-lg'>
        <Card className='flex flex-row gap-5'>
          Sværhedsgrad:
          <Card className='flex'>{renderDifficultyIcons()}</Card>
        </Card>
        <Card className='flex flex-row gap-5'>
          Alder: 
          <StoryInfoElement
            icon={getAgeIcon(playthrough?.story.targetAge ? playthrough?.story.targetAge : 4)}
            description={`Recommended age: ${playthrough?.story.targetAge || 6}+`}
            isAgeIcon
            className="justify-center"
          />
        </Card>
      </Card>
      <Card>
        story node title + encounter type
      </Card>
      <Card>
        story node textarea
      </Card>
    </Card>
  )
}

export default DashboardReaderStorySummary