import React, { FC, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/shadcn/ui/button'
import { Card } from '@/components/shadcn/ui/card'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { useMutation, useQuery } from '@apollo/client'
import GET_STORY_FOR_SUMMARY_PAGE, { GetStoryForSummaryPageQueryResult } from '@/api/queries/getStoryForSummaryPage'
import { ADD_STORY_MUTATION } from '@/api/mutations/story/addStory'

type WriterStorySummaryProps = {}

// TODO: Indsæt GQL-query der finder en story baseret på URL parameters (React Router har helt sikkert en hook hertil!)

const WriterStorySummary: FC<WriterStorySummaryProps> = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [storyTitleState, setStoryTitleState] = useState('');
    const [storyDescriptionState, setStoryDescriptionState] = useState('');

    console.log(searchParams.get('storyId'));

    const { loading, error, data } = useQuery<GetStoryForSummaryPageQueryResult>(
        GET_STORY_FOR_SUMMARY_PAGE,
        { variables: { idInput: searchParams.get('storyId') }}
    )

    const [addStory, { data: addStoryData, loading: addStoryLoading, error: addLoadingError }] = useMutation(ADD_STORY_MUTATION);

    if (loading) {
		return <p>Loading...</p>;
	} 
	if (error) {
		return <p>Error: {error.message} </p>;
	}
	if (data) {
        const story = data.stories[0];
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
                        value={story.title ? story.title : ""}
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
                        value={story.description ? story.description : ""}
                    />
                </Card>
                <Button
                    className='w-[80%] text-lg'
                    // TODO: Below onClick should take a slug of the story that is being edited
                    onClick={() => {
                        if (searchParams.get('storyId')) {
                            navigate({
                                pathname: "/graph",
                                search: `?storyId=${story.id}`
                            })
                        } else {
                            // TODO: Fix use of mutations and make sure that mutation returns new story that can be used with "navigate"
                            let newStory = addStory({ variables: {input: {
                                userId: "5f432dac-7c3e-40b2-a4d4-5310c1be3676",     // TODO: Replace value with users own id when available
                                title: "WriterStorySummary test story",
                                description: "A description of something"
                            }}});
                            navigate({
                                pathname: "/graph",
                                search: `?storyId=${newStory}`
                            })
                        }
                    }}
                >
                    Gå til historien
                </Button>
            </Card>

        )
    }
}

export default WriterStorySummary