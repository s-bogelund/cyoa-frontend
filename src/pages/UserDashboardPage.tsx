import { Button } from '@/components/shadcn/ui/button'
import { Card, CardContent, CardTitle } from '@/components/shadcn/ui/card'
import DashboardReaderStorySummary from '@/components/user-dashboard/DashboardReaderStorySummary'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

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
    targetAge: number
}

// TODO: Playthrough should instead use the story and storynode id's and then query for the respective story and storynode to put in the component
// TODO: Playthrough is given from the parent, that should query for the user latest playthrough

export type Playthrough = {
    story: Story,
    currentNode: StoryNode,
    isOngoing: boolean,
    isCompleted: boolean,
    isPlayerDead: boolean
}

const dummyPlaythrough: Playthrough = {
    story: {
        id: "123123123",
        title: "Forfatters historie",
        difficulty: "2",
        targetAge: 10,
    },
    currentNode: {
        id: "111",
            title: "Et samtale-afsnit",
            storyText: "Her kommer der til at stå en hel masse tekst, der gerne skulle blive kortet af, så brugeren kun ser en lille smule tekst og så 3 punktummer.",
            encounterType: "Samtale",
            isCheckpoint: true
    },
    isOngoing: true,
    isCompleted: false,
    isPlayerDead: false
}

const UserDashboardPage: FC<UserDashboardProps> = () => {
    const navigate = useNavigate();

  return (
    <Card className='flex flex-col w-full h-full mt-8 gap-10 md:w-[80%] lg:w-[80%] xl:w-[80%]'>
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
            <Card className='flex justify-evenly'>
                <Button
                    className='h-32 text-lg'
                    onClick={() => navigate("/search-story")}
                >
                    Finde en ny historie at læse
                </Button>
                {/* TODO: Below button should link to the writers story view, when this view has been made, and onClick should take an input with the id*/}
                <Button
                    className='h-32 text-lg'
                    onClick={() => navigate("/graph-test")}
                >
                    Skrive en ny historie
                </Button>
            </Card>
        </Card>
        <Card className='border-2 p-4'>
            <CardContent className='text-2xl'>
                Du kan også fortsætte, hvor du slap
            </CardContent>
            <Card className='flex justify-evenly'>
                <Card className='flex flex-col justify-between w-[45%] border-2 p-4'>
                    <Card>
                        <DashboardReaderStorySummary playthrough={dummyPlaythrough} />
                    </Card>
                    <Button
                        className='text-lg w-full mt-4 self-end'
                        onClick={() => navigate("/search-story")}
                        >
                        Fortsæt historien
                    </Button>
                </Card>
                {/* TODO: Below button should link to the writers story view, when this view has been made, and onClick should take an input with the id*/}
                <Card className='flex flex-col justify-between w-[45%] border-2 p-4'>
                    <Card>
                        Her skal der være et komponent der opsummerer den seneste historie man har skrevet på
                    </Card>
                    <Button
                        className='text-lg w-full mt-4 self-end'
                        onClick={() => navigate("/writer-story-summary")}
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