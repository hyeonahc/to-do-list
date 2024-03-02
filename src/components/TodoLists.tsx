import { TrashIcon } from '@heroicons/react/24/solid'
import { ITask, ITodoListsProps } from '../types/type'
import { getNanoId } from '../util/getNanoId'

// Q: getNanoId() 함수를 컴포넌트 내부에서 호출하면 컴포넌트가 다시 렌더링될때마다 새로운 아이디가 생기니 컴포넌트 밖에 선언해주었습니다.
// if you generate uniqueId at the top level of a React component or in a function outside of the component's body,
// it will be evaluated only once when "the component is initialized" and will retain the same value for subsequent renders
// 컴포넌트가 처음 렌더링될때 getNanoId() 함수가 실행되는데 그러면 input의 id값이 고정되지 않게 되는데 그래도 괜찮은건가요?
const inputId = getNanoId()

const TodoLists = ({
  filteredTasks,
  handleCheckedChange,
  handleRemoveTask,
}: ITodoListsProps) => {
  return (
    <ul className='basis-10/12 mt-2'>
      {/* Q: as ITask[]가 어떤 역할을 하는지 기억이 나지 않습니다 ㅜㅜ */}
      {(filteredTasks as ITask[]).map((task, index) => (
        <li key={index} className='flex justify-between items-center m-3'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => handleCheckedChange(index)}
              id={inputId}
              name={inputId}
              className='form-checkbox mr-2'
            />
            <label htmlFor={inputId}>{task.text}</label>
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
