import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/shadcn/ui/button'
import { Card } from '@/components/shadcn/ui/card'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'

type WriterStorySummaryProps = {}

const WriterStorySummary: FC<WriterStorySummaryProps> = () => {
    const navigate = useNavigate();
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
                id='writer-story-summary-description'/>
        </Card>
        <Button
            className='w-[80%] text-lg'
            // TODO: Below onClick should take a slug of the story that is being edited
            onClick={() => navigate("/graph-test")}
        >
            Gå til historien
        </Button>
    </Card>

  )
}

export default WriterStorySummary