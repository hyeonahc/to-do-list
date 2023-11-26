import AddTodoForm from './components/AddTodoForm'
import TodoItemContainer from './components/TodoItemContainer'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className='h-screen bg-background font-inter'>
      <div className='w-96 pt-20 mx-auto'>
        <div className='shadow-md'>
          <TopBar />
          <TodoItemContainer />
          <AddTodoForm />
        </div>
      </div>
    </div>
  )
}

export default App
