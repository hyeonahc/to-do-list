import { ChangeEvent, useState } from 'react'

interface TaskInputProps {
  onAddTask: (newTask: string) => void
}

const AddTodoForm: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickAdd()
    }
  }

  const handleClickAdd = () => {
    onAddTask(inputValue)
    setInputValue('')
  }

  return (
    <div className='bg-lightgrey p-3 flex rounded-b-lg'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='type your to do list here'
        className='form-input px-2 py-1 border-transparent rounded-l w-full placeholder-zinc-500'
        onKeyPress={handleKeyPress}
      />
      <button
        className='bg-primary px-5 py-1 text-white rounded-r'
        onClick={handleClickAdd}
      >
        Add
      </button>
    </div>
  )
}

export default AddTodoForm
