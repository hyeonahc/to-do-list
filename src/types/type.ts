import { ChangeEvent } from 'react'

interface IMenu {
  text: string
  clicked: boolean
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
  handleCheckedChange: (index: number) => void
  handleEditTask: (id: string) => void
  handleRemoveTask: (index: number) => void
  handleNewText: (e: ChangeEvent<HTMLInputElement>, id: string) => void
  handleEditAndSaveTask: (id: string) => void
}

interface IAddTodoListProps {
  handleAddTask: (newTask: string) => void
}

interface ITopBarProps {
  taskStatusMenus: IMenu[]
  clickMenu: (index: number) => void
}

export type { IAddTodoListProps, IMenu, ITask, ITodoListsProps, ITopBarProps }
