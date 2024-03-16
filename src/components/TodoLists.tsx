import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { ChangeEvent, useState } from 'react'
import { ITodoListsProps } from '../types/type'
import { getNanoId } from '../util/getNanoId'

// Q: getNanoId() 함수를 컴포넌트 내부에서 호출하면 컴포넌트가 다시 렌더링될때마다 새로운 아이디가 생기니 컴포넌트 밖에 선언해주었습니다.
// if you generate uniqueId at the top level of a React component or in a function outside of the component's body,
// it will be evaluated only once when "the component is initialized" and will retain the same value for subsequent renders
// 컴포넌트가 처음 렌더링될때 getNanoId() 함수가 실행되는데 그러면 id값이 고정되지 않게 되는데 그래도 괜찮은건가요?
const inputId = getNanoId()

const TodoLists = ({
  filteredTasks,
  handleCheckedChange,
  handleEditTask,
  handleRemoveTask,
  handleEditAndSaveTask,
}: ITodoListsProps) => {
  const [newText, setnNewText] = useState('')

  const getNewText = (e: ChangeEvent<HTMLInputElement>) => {
    setnNewText(e.target.value)
  }

  return (
    <ul className='basis-10/12 mt-2'>
      {filteredTasks.map((task, index) => (
        <li key={`list-${index}`} className='m-3'>
          {!task.isEditing ? (
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  checked={task.completed}
                  onChange={() => handleCheckedChange(index)}
                  id={`checkbox-${index}`}
                  name={`checkbox-${index}`}
                  className='form-checkbox mr-2'
                />
                <label htmlFor={`checkbox-${index}`}>{task.text}</label>
              </div>
              <div className='flex justify-end gap-1'>
                <PencilSquareIcon
                  className='h-4 w-4 text-zinc-500 cursor-pointer'
                  onClick={() => handleEditTask(task.id)}
                />
                <TrashIcon
                  className='h-4 w-4 text-zinc-500 cursor-pointer'
                  onClick={() => handleRemoveTask(index)}
                />
              </div>
            </div>
          ) : (
            <div className='flex gap-5'>
              <input
                type='text'
                onChange={getNewText}
                id={`edit-input-${index}`}
                name={`edit-input-${index}`}
                className='block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder={task.text}
              />
              <button
                className='border-2 border-primary rounded px-2 py-0 text-primary'
                onClick={() => handleEditAndSaveTask(task.id, newText)}
              >
                Save
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoLists
