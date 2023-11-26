import { TrashIcon } from '@heroicons/react/24/solid'

const TodoItem = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          id='example'
          name='example'
          className='form-checkbox mr-2'
        />
        <label htmlFor='example'>example</label>
      </div>
      <div>
        <TrashIcon className='h-4 w-4 text-zinc-500' />
      </div>
    </div>
  )
}

export default TodoItem
