import { TrashIcon } from '@heroicons/react/24/solid'

interface Task {
  // id: number
  text: string
  completed: boolean
}

interface TodoListsProps {
  tasks: Task[]
  handleCheckedChange: (index: number) => void
  handleRemoveTask: (index: number) => void
}

const TodoLists: React.FC<TodoListsProps> = ({
  tasks,
  handleCheckedChange,
  handleRemoveTask,
}) => {
  return (
    <ul className='mt-2'>
      {tasks.map((task, index) => (
        <li key={index} className='flex justify-between items-center m-3'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => handleCheckedChange(index)}
              id={index.toString()}
              name={index.toString()}
              className='form-checkbox mr-2'
            />
            <label htmlFor={index.toString()}>{task.text}</label>
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
