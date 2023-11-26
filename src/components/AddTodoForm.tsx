const AddTodoForm = () => {
  return (
    <div className='bg-lightgrey p-3 flex rounded-b-lg'>
      <input
        type='text'
        placeholder='type your to do list here'
        className='form-input px-2 py-1 border-transparent rounded-l w-full placeholder-zinc-500'
      />
      <button className='bg-primary px-5 py-1 text-white rounded-r'>Add</button>
    </div>
  )
}

export default AddTodoForm
