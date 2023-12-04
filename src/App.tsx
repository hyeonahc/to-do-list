import TodoContainer from './components/TodoContainer'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className='h-screen bg-background font-inter'>
      <div className='w-96 pt-20 mx-auto'>
        <div className='shadow-md'>
          <TopBar />
          <TodoContainer />
        </div>
      </div>
    </div>
  )
}

export default App
