import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { ITopBarProps } from '../types/type'

const TopBar = ({ Menus, clickMenu }: ITopBarProps) => {
  return (
    <div className='bg-lightgrey flex justify-between p-3 rounded-t-lg'>
      <div>
        <SunIcon className='h-6 w-6 text-zinc-500' />
        <MoonIcon className='h-6 w-6 text-zinc-500 hidden' />
      </div>
      <div className='flex gap-x-3 text-primaryWithOpacity'>
        {Object.keys(Menus).map(menuKey => (
          <div
            key={Menus[menuKey].id}
            className={
              Menus[menuKey].clicked
                ? 'cursor-pointer text-primary border-b-2 border-primary'
                : 'cursor-pointer'
            }
            onClick={() => clickMenu(Menus[menuKey].id)}
          >
            {menuKey}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBar
