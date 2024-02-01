import { TrashIcon } from '@heroicons/react/24/solid'

interface TodoListsProps {
  tasks: string[]
  handleRemoveTask: (index: number) => void
}

const TodoLists: React.FC<TodoListsProps> = ({ tasks, handleRemoveTask }) => {
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
            <TrashIcon
              className='h-4 w-4 text-zinc-500 cursor-pointer'
              onClick={() => handleRemoveTask(index)}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoLists
