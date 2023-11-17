import { Playthrough } from '@/pages/UserDashboardPage'
import React, { FC } from 'react'
import { Card } from '../shadcn/ui/card'

type DashboardReaderStorySummaryProps = {
    playthrough?: Playthrough,
}

const DashboardReaderStorySummary: FC<DashboardReaderStorySummaryProps> = ({ playthrough }) => {
  return (
    <Card className='flex border-2'>
      <Card className='w-full h-fit'></Card>
    </Card>
  )
}

export default DashboardReaderStorySummary