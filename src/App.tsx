import TodoContainer from './components/TodoContainer'

const App: React.FC = () => {
  return (
    <div className='h-screen bg-background font-inter'>
      <div className='w-96 pt-20 mx-auto'>
        <div className='shadow-md'>
          <TodoContainer />
        </div>
      </div>
    </div>
  )
}

export default App
