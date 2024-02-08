import { useEffect, useState } from 'react'
import AddTodoList from './AddTodoList'
import TodoLists from './TodoLists'
import TopBar from './TopBar'

interface Menu {
  text: string
  clicked: boolean
}

// Q: id 값을 넣는게 더 좋은 방법인가요? id값을 넣어도 수정할 데이터는 index로 찾는게 편해서 잘 쓰지 않게됩니다. 현업에서는 어떤 방식으로 사용하나요?
interface Task {
  // id: number
  text: string
  completed: boolean
}

const TodoContainer = () => {
  const [taskStatusMenus, setTaskStatusMenus] = useState<Menu[]>([
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
  const [tasks, setTasks] = useState<Task[]>([])

  // Q: 이렇게 코드를 간결화하는 작업은 어떻게 하면 늘까요?
  // 기존에 짠 복잡한 코드
  // const clickMenu = (indexToClick: number) => {
  //   setTaskStatusMenus(prevMenus => prevMenus.map((menu, index) => {
  //       if (menu.clicked === true) {
  //         return { ...menu, clicked: false }
  //       } else if (index === indexToClick) {
  //         return { ...menu, clicked: true }
  //       }
  //       return menu
  //     })
  //   )
  // }

  const clickMenu = (indexToClick: number) => {
    setTaskStatusMenus(prevMenus =>
      prevMenus.map((menu, index) => ({
        ...menu,
        clicked: index === indexToClick,
      }))
    )
    // test(indexToClick)
  }

  const filteredTasks = () => {
    const activeMenu = taskStatusMenus.find(menu => menu.text === 'Active')
    const completedMenu = taskStatusMenus.find(
      menu => menu.text === 'Completed'
    )

    if (activeMenu && activeMenu.clicked) {
      return tasks.filter(task => !task.completed)
    } else if (completedMenu && completedMenu.clicked) {
      return tasks.filter(task => task.completed)
    } else {
      return tasks
    }
  }

  // const test = (indexToClick: number) => {
  //   taskStatusMenus.map((task, index) => {
  //     if (index === indexToClick) {
  //       if (task.text === 'Active') {
  //         console.log('Active')
  //       } else if (task.text === 'Completed') {
  //         console.log('Completed')
  //       }
  //     }
  //   })
  // }

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

  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(taskStatusMenus))

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
