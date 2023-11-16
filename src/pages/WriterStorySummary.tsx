import { Card, CardTitle } from '@/components/shadcn/ui/card'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import React, { FC } from 'react'

type WriterStorySummaryProps = {}

const WriterStorySummary: FC<WriterStorySummaryProps> = () => {
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
                htmlFor='writer-story-summary-title'
                className='text-lg'
            >
                Beskrivelse af historien:
            </Label>
            <Input
                className='w-full h-12 border-2 text-2xl'
                placeholder='Skriv historiens titel her!'
                id='writer-story-summary-title'
            />
        </Card>
    </Card>

  )
}

export default WriterStorySummary