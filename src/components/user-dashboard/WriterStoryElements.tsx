import React, { FC } from 'react'

import { renderDifficultyIcons } from '@/utils/renderDifficultyIcons'

import getAgeIcon from '../icons/age-icons'
import { Icons } from '../icons/Icons'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'
import { Story } from '@/gql/graphql'

type WriterStoryElementsProps = {
    story: Story
}

const WriterStoryElements: FC<WriterStoryElementsProps> = ({ story }) => {
    let difficultyJSX;

    if (story?.difficulty) {
        difficultyJSX = renderDifficultyIcons(story?.difficulty ? story?.difficulty : "");
    } else {
        difficultyJSX = renderDifficultyIcons("");
    }

  return (
    <Card>
        {/* This content is rendered on large screens */}
        <Card className='flex flex-col sm:hidden m-3 items-center gap-3 text-lg lg:flex lg:flex-col'>
            <Card className='flex flex-row gap-2'>
                Sværhedsgrad:
                <Card className='flex'>
                    {difficultyJSX}
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
            <Card className='flex flex-row gap-2'>
                Antal afsnit: {story.storyNodes?.length}
                <StoryInfoElement
                    icon={Icons.Nodes}
                    description={`Antal afsnit i en historie`}
                    isAgeIcon
                    className="justify-center"
                />
            </Card>
        </Card>
        {/* This content is rendered on small screens */}
        <Card className='hidden sm:flex sm:flex-col m-3 items-center text-lg gap-3 lg:hidden'>
            <Card className='flex flex-row gap-2'>
                <Card className='flex'>
                    {difficultyJSX}
                </Card>
            </Card>
            <Card className='flex flex-row w-full gap-8'>
                <StoryInfoElement
                    icon={getAgeIcon(story.targetAge ? story.targetAge : 4)}
                    description={`Recommended age: ${story.targetAge || 6}+`}
                    isAgeIcon
                    className="justify-center"
                />
                <Card className='flex flex-row'>
                    <StoryInfoElement
                        icon={Icons.Nodes}
                        description={`Antal afsnit i en historie`}
                        isAgeIcon
                        className="justify-center"
                        />
                        {/* TODO: Calculate number based on length of story's storyNode array */}
                        {story.storyNodes?.length}
                </Card>
            </Card>
        </Card>
    </Card>
  )
}

export default WriterStoryElements