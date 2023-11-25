import React, { FC } from 'react'

import { StoryNode } from '@/gql/graphql'
import { renderDifficultyIcons } from '@/utils/renderDifficultyIcons'
import { renderEncounterType } from '@/utils/renderEncounterType'

import getAgeIcon from '../icons/age-icons'
import { Card } from '../shadcn/ui/card'
import StoryInfoElement from '../story-homepage/StoryInfoElement'

type ReaderStoryElementsProps = {
    storyNode: StoryNode
}

const ReaderStoryElements: FC<ReaderStoryElementsProps> = ({ storyNode }) => {
    // const storyDifficulty: number = summaryStory?.difficulty ? parseInt(summaryStory?.difficulty) : 0;

    let difficultyJSX;

    if (storyNode.story?.difficulty) {
        difficultyJSX = renderDifficultyIcons(storyNode.story?.difficulty ? storyNode.story?.difficulty : "");
    } else {
        difficultyJSX = renderDifficultyIcons("");
    }
    

  return (
    <Card>
        {/* Content below is shown on large screens */}
        <Card className='flex flex-col sm:hidden m-3 items-center gap-3 lg:flex lg:flex-col'>
            <Card className='flex flex-row gap-2 text-lg'>
                Sværhedsgrad:
                <Card className='flex'>{difficultyJSX}</Card>
            </Card>
            <Card className='flex flex-row gap-2 text-lg'>
                Alder:
                <StoryInfoElement
                icon={getAgeIcon(storyNode.story?.targetAge ? storyNode.story?.targetAge : 4)}
                description={`Recommended age: ${storyNode.story?.targetAge || 6}+`}
                isAgeIcon
                className="justify-center"
                />
            </Card>
            <Card className='flex flex-row gap-6 text-lg mb-2'>
                <Card>
                    {renderEncounterType(storyNode?.encounterType ? storyNode?.encounterType : "")}
                </Card>
                <Card className='flex md:hidden lg:flex'>
                    {storyNode?.title}
                </Card>
            </Card>
        </Card>
        {/* Content below is shown on small screens */}
        <Card className='hidden sm:flex sm:flex-col m-3 items-center gap-3 lg:hidden'>
            <Card className='flex gap-2'>
                <Card className='flex'>{difficultyJSX}</Card>
            </Card>
            <Card className='flex flex-row w-full justify-between'>
                <StoryInfoElement
                icon={getAgeIcon(storyNode.story?.targetAge ? storyNode.story?.targetAge : 4)}
                description={`Recommended age: ${storyNode.story?.targetAge || 6}+`}
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