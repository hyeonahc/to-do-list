import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

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

  // Q: 이렇게 코드를 간결화하는 작업은 어떻게 하면 늘까요?
  // 기존에 짠 복잡한 코드
  // const clickMenu = (indexToClick: number) => {
  //   setTaskStatusMenus(prevMenus => prevMenus.map((menu, index) => {
  //       if (menu.clicked === true) {
  //         return { ...menu, clicked: false }
  //       } else if (index === indexToClick) {
  //         return { ...menu, clicked: true }
  //       }
  //       return menu
  //     })
  //   )
  // }

  // 챗 지피티가 업데이트해준 간결한 코드
  const clickMenu = (indexToClick: number) => {
    setTaskStatusMenus(prevMenus =>
      prevMenus.map((menu, index) => ({
        ...menu,
        clicked: index === indexToClick,
      }))
    )
  }

  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(taskStatusMenus))
  }, [])

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
