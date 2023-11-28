import React, { FC, useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/shadcn/ui/button'
import { Card } from '@/components/shadcn/ui/card'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import GET_STORY_FOR_SUMMARY_PAGE, { GetStoryForSummaryPageQueryResult } from '@/api/queries/getStoryForSummaryPage'
import { ADD_STORY_MUTATION } from '@/api/mutations/story/addStory'
import { UPDATE_STORY_MUTATION } from '@/api/mutations/story/updateStory'
import { dummyUserId } from './UserDashboardPage'

type WriterStorySummaryProps = {}

// TODO: Indsæt GQL-query der finder en story baseret på URL parameters (React Router har helt sikkert en hook hertil!)

const WriterStorySummary: FC<WriterStorySummaryProps> = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [storyTitleState, setStoryTitleState] = useState('');
    const [storyDescriptionState, setStoryDescriptionState] = useState('');

    const client = useApolloClient();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await client.query({
                query: GET_STORY_FOR_SUMMARY_PAGE,
                variables: {
                    idInput: searchParams.get('storyId')
                },
            });
            if (data) {
                const story = data.stories[0];
                setStoryTitleState(story.title);
                setStoryDescriptionState(story.description);
            }
        }
        if (searchParams.size !== 0) {
            console.log(searchParams)
           fetchData();
        }
    }, [client, searchParams])

    const handleGoToStory = async () => {
        let storyId: string | null = '';

        if (searchParams.size !== 0) {
            storyId = searchParams.get('storyId')
            await client.mutate({
                mutation: UPDATE_STORY_MUTATION,
                variables: {
                    input: {
                        id: storyId,
                        title: storyTitleState,
                        description: storyDescriptionState
                    }
                }
            });
        } else {
            const newStory = await client.mutate({
                mutation: ADD_STORY_MUTATION,
                variables: {
                    input: {
                        userId: dummyUserId,
                        title: storyTitleState,
                        description: storyDescriptionState
                    }
                }
            })
            storyId = newStory.data.addStory.id;
        }

        navigate({
            pathname: "/graph",
            search: `?storyId=${storyId}`
        });
    }

    return (
        <Card className='flex flex-col w-full h-full mt-8 gap-10 items-center md:w-[50%] lg:w-[50%] xl:w-[50%]'>
            <Card className='flex flex-col w-full'>
                <Label
                    htmlFor='writer-story-summary-title'
                    className='text-lg'
                >
                    Historiens titel:
                </Label>
                <Input
                    className='w-full h-12 border-2 text-2xl'
                    placeholder='Skriv historiens titel her!'
                    id='writer-story-summary-title'
                    onInput={e => setStoryTitleState(e.currentTarget.value)}
                    value={storyTitleState}
                />
            </Card>
            <Card className='flex flex-col w-full'>
                <Label
                    htmlFor='writer-story-summary-description'
                    className='text-lg'
                >
                    Beskrivelse af historien:
                </Label>
                <Textarea className='w-full min-h-[150px] border-2 text-2xl'
                    placeholder='Skriv historiens beskrivelse her. Det kan være en kort opsummering af historien, eller en tekst der skal gøre læseren interesseret.'
                    id='writer-story-summary-description'
                    onInput={e => setStoryDescriptionState(e.currentTarget.value)}
                    value={storyDescriptionState}
                />
            </Card>
            <Button
                className='w-[80%] text-lg'
                onClick={() => handleGoToStory()}
            >
                Gå til historien
            </Button>
        </Card>

    )
}

export default WriterStorySummary