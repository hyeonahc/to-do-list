import { useEffect, useState } from 'react'
import AddTodoList from './AddTodoList'
import TodoLists from './TodoLists'

const TodoContainer = () => {
  const [tasks, setTasks] = useState<string[]>([])

  const handleAddTask = (newTask: string): void => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks: string[]) => {
        const newTasks = [...prevTasks, newTask]
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        return newTasks
      })
    }
  }

  useEffect(() => {
    const getStoredTasks = localStorage.getItem('tasks')
    if (getStoredTasks) {
      setTasks(JSON.parse(getStoredTasks))
    }
  }, [])

  return (
    <div className='flex flex-col	justify-between	bg-white h-96'>
      <TodoLists tasks={tasks} />
      <AddTodoList handleAddTask={handleAddTask} />
    </div>
  )
}

export default TodoContainer
