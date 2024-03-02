import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { ITopBarProps } from '../types/type'

const TopBar = ({ taskStatusMenus, clickMenu }: ITopBarProps) => {
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
              menu.clicked
                ? 'cursor-pointer text-primary border-b-2 border-primary'
                : 'cursor-pointer'
            }
            onClick={() => clickMenu(index)}
          >
            {menu.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBar
