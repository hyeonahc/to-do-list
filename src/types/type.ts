import { ChangeEvent } from 'react'

interface IMenu {
  [key: string]: {
    text: string
    clicked: boolean
    id: string
  }
}

interface ITask {
  id: string
  text: string
  isEditing: boolean
  newText: string
  completed: boolean
}

interface ITodoListsProps {
  filteredTasks: ITask[]
  handleCheckedChange: (id: string) => void
  handleEditTask: (id: string) => void
  handleRemoveTask: (id: string) => void
  handleNewText: (e: ChangeEvent<HTMLInputElement>, id: string) => void
  handleEditAndSaveTask: (id: string) => void
}

interface IAddTodoListProps {
  handleAddTask: (newTask: string) => void
}

interface ITopBarProps {
  Menus: IMenu
  clickMenu: (id: string) => void
}

export type { IAddTodoListProps, IMenu, ITask, ITodoListsProps, ITopBarProps }
