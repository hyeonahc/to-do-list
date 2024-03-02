interface IMenu {
  text: string
  clicked: boolean
}

interface ITask {
  id: string
  text: string
  completed: boolean
}

interface ITodoListsProps {
  filteredTasks: ITask[]
  handleCheckedChange: (index: number) => void
  handleRemoveTask: (index: number) => void
}

interface IAddTodoListProps {
  handleAddTask: (newTask: string) => void
}

interface ITopBarProps {
  taskStatusMenus: IMenu[]
  clickMenu: (index: number) => void
}

export type { IAddTodoListProps, IMenu, ITask, ITodoListsProps, ITopBarProps }
