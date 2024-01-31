import { TrashIcon } from '@heroicons/react/24/solid'

interface TasksProps {
  tasks: string[]
}

const TodoLists: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <ul className='mt-2'>
      {tasks.map((task, index) => (
        <li key={index} className='flex justify-between items-center m-3'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id={index.toString()}
              name={index.toString()}
              className='form-checkbox mr-2'
            />
            <label htmlFor={index.toString()}>{task}</label>
          </div>
          <div>
            <TrashIcon className='h-4 w-4 text-zinc-500' />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoLists
