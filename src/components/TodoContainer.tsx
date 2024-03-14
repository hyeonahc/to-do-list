import { useEffect, useState } from 'react'
import { IMenu, ITask } from '../types/type'
import { getNanoId } from '../util/getNanoId'
import AddTodoList from './AddTodoList'
import TodoLists from './TodoLists'
import TopBar from './TopBar'

const TodoContainer = () => {
  const [taskStatusMenus, setTaskStatusMenus] = useState<IMenu[]>([
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
  const [tasks, setTasks] = useState<ITask[]>([])

  const clickMenu = (indexToClick: number) => {
    setTaskStatusMenus(prevMenus =>
      prevMenus.map((menu, index) => ({
        ...menu,
        clicked: index === indexToClick,
      }))
    )
  }

  const filteredTasks = () => {
    const activeMenu = taskStatusMenus.find(menu => menu.text === 'Active')
    const completedMenu = taskStatusMenus.find(
      menu => menu.text === 'Completed'
    )

    // Create three if statements for early return
    if (activeMenu && activeMenu.clicked) {
      return tasks.filter(task => !task.completed)
    }
    if (completedMenu && completedMenu.clicked) {
      return tasks.filter(task => task.completed)
    }
    return tasks
  }

  const handleCheckedChange = (indexToToggle: number) => {
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

  const handleAddTask = (newTask: string): void => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks: ITask[]) => {
        const newTaskObject: ITask = {
          id: getNanoId(),
          text: newTask,
          completed: false,
        }
        const newTasks = [...prevTasks, newTaskObject]
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
    <div className='flex flex-col	bg-white h-96'>
      <TopBar taskStatusMenus={taskStatusMenus} clickMenu={clickMenu} />
      <TodoLists
        filteredTasks={filteredTasks()}
        handleCheckedChange={handleCheckedChange}
        handleRemoveTask={handleRemoveTask}
      />
      <AddTodoList handleAddTask={handleAddTask} />
    </div>
  )
}

export default TodoContainer
