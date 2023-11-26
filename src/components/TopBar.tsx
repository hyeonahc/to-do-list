import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const TopBar = () => {
  return (
    <div className='bg-lightgrey flex justify-between p-3 rounded-t-lg'>
      <div>
        <SunIcon className='h-6 w-6 text-zinc-500' />
        <MoonIcon className='h-6 w-6 text-zinc-500 hidden' />
      </div>
      <div className='flex gap-x-3 text-primaryWithOpacity'>
        <div className='text-primary border-b-2 border-primary'>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
    </div>
  )
}

export default TopBar
