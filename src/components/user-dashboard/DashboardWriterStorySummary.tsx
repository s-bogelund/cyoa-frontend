import { Story } from '@/pages/UserDashboardPage'
import React, { FC } from 'react'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import getAgeIcon from '../icons/age-icons'
import { Textarea } from '../shadcn/ui/textarea'
import { renderDifficultyIcons } from './DashboardReaderStorySummary'
import { Icons } from '../icons/Icons'

// TODO: Parent needs a query that fetches the user's story that has the latest modifications made to them
// TODO: This story 
type DashboardWriterStorySummaryProps = {
    story: Story
}

const DashboardWriterStorySummary: FC<DashboardWriterStorySummaryProps> = ({ story }) => {
  return (
    <Card className='flex flex-col border-2 items-center p-2'>
        <Card className='h-fit text-2xl mb-3'>
            {story.title}
        </Card>
        <Card className='flex flex-row gap-6 text-lg mb-2'>
            <Card className='flex flex-row gap-2'>
                Sværhedsgrad:
                <Card className='flex'>
                    {renderDifficultyIcons(parseInt(story.difficulty))}
                </Card>
            </Card>
            <Card className='flex flex-row gap-2'>
                Alder: 
                <StoryInfoElement
                    icon={getAgeIcon(story.targetAge ? story.targetAge : 4)}
                    description={`Recommended age: ${story.targetAge || 6}+`}
                    isAgeIcon
                    className="justify-center"
                />
            </Card>
        </Card>
        <Card className='flex flex-row gap-6 text-lg mb-2'>
            <Card className='flex flex-row gap-2'>
                Antal afsnit: {1337}
                <StoryInfoElement
                    icon={Icons.Nodes}
                    description={`Recommended age: ${story.targetAge || 6}+`}
                    isAgeIcon
                    className="justify-center"
                />
            </Card>
        </Card>
    </Card>
  )
}

export default DashboardWriterStorySummary