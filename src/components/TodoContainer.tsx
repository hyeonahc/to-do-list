import { useEffect, useState } from 'react'
import AddTodoList from './AddTodoList'
import TodoLists from './TodoLists'

// Q: id 값을 넣는게 더 좋은 방법인가요? id값을 넣어도 수정할 데이터는 index로 찾는게 편해서 잘 쓰지 않게됩니다. 현업에서는 어떤 방식으로 사용하나요?
interface Task {
  // id: number
  text: string
  completed: boolean
}

const TodoContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (newTask: string): void => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks: Task[]) => {
        const newTaskObject: Task = {
          text: newTask,
          completed: false,
        }
        const newTasks = [...prevTasks, newTaskObject]
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        return newTasks
      })
    }
  }

  const handleCheckedChange = (indexToToggle: number) => {
    // Q: state를 업데이트할때 어떤 방법이 더 나은 방법인가요?

    // 1번
    // const newTask = tasks.map((task, index) => {
    //   if (index === indexToToggle) {
    //     return { ...task, completed: !task.completed }
    //   }
    //   return task
    // })
    // setTasks(newTask)

    // 2번
    // the functional form of setTasks, which receives the previous state as a parameter
    // setState에서 사용한 문법 한번 이야기해보고 싶습니다
    setTasks(prevTasks => {
      const newTasks = prevTasks.map((task, index) => {
        if (index === indexToToggle) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
  }

  const handleRemoveTask = (indexToRemove: number): void => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  useEffect(() => {
    const getStoredTasks = localStorage.getItem('tasks')
    if (getStoredTasks) {
      setTasks(JSON.parse(getStoredTasks))
    }
  }, [])

  return (
    <div className='flex flex-col	justify-between	bg-white h-96'>
      <TodoLists
        tasks={tasks}
        handleCheckedChange={handleCheckedChange}
        handleRemoveTask={handleRemoveTask}
      />
      <AddTodoList handleAddTask={handleAddTask} />
    </div>
  )
}

export default TodoContainer
