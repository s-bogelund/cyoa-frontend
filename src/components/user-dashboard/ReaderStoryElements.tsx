import React, { FC } from 'react'

import { Story, StoryNode } from '@/pages/UserDashboardPage'

import getAgeIcon from '../icons/age-icons'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import { renderDifficultyIcons, renderEncounterType } from './DashboardReaderStorySummary'

type ReaderStoryElementsProps = {
    story?: Story,
    storyNode?: StoryNode
}

const ReaderStoryElements: FC<ReaderStoryElementsProps> = ({ story, storyNode }) => {
    const storyDifficulty: number = story?.difficulty ? parseInt(story?.difficulty) : 0;

    
      
  return (
    <Card>
        {/* Content below is shown on large screens */}
        <Card className='hidden m-3 items-center gap-3 lg:flex lg:flex-col'>
            <Card className='flex flex-row gap-2 text-lg'>
                Sværhedsgrad:
                <Card className='flex'>{renderDifficultyIcons(storyDifficulty)}</Card>
            </Card>
            <Card className='flex flex-row gap-2 text-lg'>
                Alder:
                <StoryInfoElement
                icon={getAgeIcon(story?.targetAge ? story?.targetAge : 4)}
                description={`Recommended age: ${story?.targetAge || 6}+`}
                isAgeIcon
                className="justify-center"
                />
            </Card>
            <Card className='flex flex-row gap-6 text-lg mb-2'>
                <Card>
                    {renderEncounterType(storyNode?.encounterType ? storyNode?.encounterType : "")}
                </Card>
                <Card className='hidden lg:flex'>
                    {storyNode?.title}
                </Card>
            </Card>
        </Card>
        {/* Content below is shown on small screens */}
        <Card className='flex flex-col m-3 items-center gap-3 lg:hidden'>
            <Card className='flex gap-2'>
                <Card className='flex'>{renderDifficultyIcons(storyDifficulty)}</Card>
            </Card>
            <Card className='flex flex-row w-full justify-between'>
                <StoryInfoElement
                icon={getAgeIcon(story?.targetAge ? story?.targetAge : 4)}
                description={`Recommended age: ${story?.targetAge || 6}+`}
                isAgeIcon
                className="justify-center"
                />
                <Card>
                    {renderEncounterType(storyNode?.encounterType ? storyNode?.encounterType : "")}
                </Card>
            </Card>
        </Card>
    </Card>
  )
}

export default ReaderStoryElements