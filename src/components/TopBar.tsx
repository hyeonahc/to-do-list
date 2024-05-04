import { ITopBarProps } from '../types/type'

const TopBar = ({ Menus, clickMenu }: ITopBarProps) => {
  return (
    <div className='bg-lightgrey p-3 rounded-t-lg'>
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
            {Menus[menuKey].text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBar
