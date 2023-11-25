import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/shadcn/ui/button'
import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card'
import DashboardReaderStorySummary from '@/components/user-dashboard/DashboardReaderStorySummary'
import DashboardWriterStorySummary from '@/components/user-dashboard/DashboardWriterStorySummary'
import { Playthrough } from '@/gql/graphql'

type User = {
    firstName: string,
    lastName: string,
    sectionsRead: number,
    sectionsWritten: number
}

type UserDashboardProps = {
    // user: User;
}

const dummyUser: User = {
    firstName: "Flemming",
    lastName: "Flemmingsen",
    sectionsRead: 189,
    sectionsWritten: 565
}

// TODO: Use correct type definitions once codegen is setup
export type StoryNode = {
    id: string
    title: string,
    storyText: string,
    encounterType: string,
    isCheckpoint: boolean
}

export type Story = {
    id: string,
    title: string,
    difficulty: string,
    targetAge: number,
    playtime: number,
    description: string
}

// TODO: Playthrough should instead use the story and storynode id's and then query for the respective story and storynode to put in the component
// TODO: Playthrough is given from the parent, that should query for the user latest playthrough

// export type Playthrough = {
//     story: Story,
//     currentNode: StoryNode,
//     isOngoing: boolean,
//     isCompleted: boolean,
//     isPlayerDead: boolean
// }



const dummyPlaythrough: Playthrough = {     // Query for playthrough with latest "Modified"
    isCompleted: false,
    isOngoing: true,
    isDeleted: false,
    currentNode: "f24c1777-3311-4a39-8662-27dd7190e2cd",
    isPlayerDead: false,
    storyId: "8e3cd742-dce3-48f8-b101-cd80ead59df9",
    userId: "2c7418c1-eb16-4ed3-8c45-539bfbff224d",
    createdAt: new Date(),
    id: "2c7418c1-eb16-4ed3-8c45-539bfbff2211",     // This is a bogus value
    modifiedAt: new Date()
}

const dummyLatestStory: Story = {
    id: "7c493899-284d-4c9c-b3a8-ea4246b9d1c6",
    title: "Dødens Labyrint",
    difficulty: "3",
    targetAge: 16,
    playtime: 4,
    description: "Her er der en beskrivelse"
}

const UserDashboardPage: FC<UserDashboardProps> = () => {
    const navigate = useNavigate();

  return (
    <Card className='flex flex-col w-full h-full mt-8 gap-10 md:w-[80%] lg:w-[75%] xl:min-w-[1000px] xl:w-[50%] '>
        <Card className='text-center'>
            <CardTitle className='text-4xl mb-8'>
                Hej {dummyUser.firstName}!
            </CardTitle>
        </Card>
        <Card>
            <CardContent className=''>
                Du har læst {dummyUser.sectionsRead} afsnit den seneste måned og selv skrevet {dummyUser.sectionsWritten} afsnit. Godt gået!
            </CardContent>
        </Card>
        <Card className='border-2 p-4'>
            <CardContent className='text-2xl'>
                Hvad vil du gerne lave i dag?
            </CardContent>
            <Card className='flex flex-row justify-evenly p-6'>
                <Button
                    className='h-32 text-lg w-[30%]'
                    onClick={() => navigate("/browse")}
                >
                    Finde en ny historie at læse
                </Button>
                {/* TODO: Below button should link to the writers story view, when this view has been made, and onClick should take an input with the id*/}
                <Button
                    className='h-32 text-lg w-[30%]'
                    onClick={() => navigate("/writer-summary")}
                >
                    Skrive en ny historie
                </Button>
            </Card>
        </Card>
        <Card className='border-2 p-4'>
            <CardContent className='text-2xl'>
                Du kan også fortsætte, hvor du slap
            </CardContent>
            <Card className='flex flex-col sm:flex-row justify-evenly gap-3'>
                <Card className='flex flex-col justify-between w-full sm:w-[45%] border-2 p-4'>
                    <Card>
                        <DashboardReaderStorySummary
                            currentNodeId={dummyPlaythrough.currentNode}
                        />
                    </Card>
                    <Button
                        className='text-lg w-full mt-4 self-end'
                        onClick={() => navigate("/playnode")}
                        >
                        Fortsæt historien
                    </Button>
                </Card>
                {/* TODO: Below button should link to the writers story view, when this view has been made, and onClick should take an input with the id*/}
                <Card className='flex flex-col justify-between w-full sm:w-[45%] border-2 p-4'>
                    <Card>
                        <DashboardWriterStorySummary story={dummyLatestStory} />
                    </Card>
                    <Button
                        className='text-lg w-full mt-4 self-end'
                        onClick={() => navigate({
                            pathname: "/writer-summary",
                            search: `?storyId=${dummyLatestStory.id}`
                        })}
                        >
                        Skriv videre
                    </Button>
                </Card>
            </Card>
        </Card>
    </Card>
  )
}

export default UserDashboardPage;