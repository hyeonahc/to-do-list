import { ChangeEvent, useEffect, useState } from 'react'
import { IMenu, ITask } from '../types/type'
import { getNanoId } from '../util/getNanoId'
import AddTodoList from './AddTodoList'
import TodoLists from './TodoLists'
import TopBar from './TopBar'

const TodoContainer = () => {
  // Change to Object
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

  const handleCheckedChange = (idToToggle: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === idToToggle) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
  }

  const handleEditTask = (idToEdit: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === idToEdit) {
          return { ...task, isEditing: !task.isEditing }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
  }

  const handleRemoveTask = (idToRemove: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== idToRemove)
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
  }

  const handleNewText = (
    e: ChangeEvent<HTMLInputElement>,
    idToEdit: string
  ) => {
    console.log(e.target.value)
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === idToEdit) {
          return { ...task, newText: e.target.value }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
  }

  const handleEditAndSaveTask = (idToEditAndSave: string) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === idToEditAndSave) {
          return { ...task, text: task.newText }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return newTasks
    })
    handleEditTask(idToEditAndSave)
  }

  const handleAddTask = (newTask: string) => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks: ITask[]) => {
        const newTaskObject: ITask = {
          id: getNanoId(),
          text: newTask,
          isEditing: false,
          newText: '',
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
        handleEditTask={handleEditTask}
        handleRemoveTask={handleRemoveTask}
        handleNewText={handleNewText}
        handleEditAndSaveTask={handleEditAndSaveTask}
      />
      <AddTodoList handleAddTask={handleAddTask} />
    </div>
  )
}

export default TodoContainer
