import AddTodoForm from './components/AddTodoForm'
import TodoItemContainer from './components/TodoItemContainer'
import TopBar from './components/TopBar'

function App() {
  return (
    <div>
      <TopBar />
      <TodoItemContainer />
      <AddTodoForm />
    </div>
  )
}

export default App
