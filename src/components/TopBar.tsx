import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface Menu {
  text: string
  clicked: boolean
}

const TopBar = () => {
  const [taskStatusMenus, setTaskStatusMenus] = useState<Menu[]>([
    {
      text: 'All',
      clicked: true,
    },
    {
      text: 'Active',
      clicked: false,
    },
    {
      text: 'Completed',
      clicked: false,
    },
  ])

  return (
    <div className='bg-lightgrey flex justify-between p-3 rounded-t-lg'>
      <div>
        <SunIcon className='h-6 w-6 text-zinc-500' />
        <MoonIcon className='h-6 w-6 text-zinc-500 hidden' />
      </div>
      <div className='flex gap-x-3 text-primaryWithOpacity'>
        {taskStatusMenus.map((menu, index) => (
          <div
            key={index}
            className={
              menu.clicked ? 'text-primary border-b-2 border-primary' : ''
            }
          >
            {menu.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBar
