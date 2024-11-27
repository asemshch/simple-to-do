import React, {useState} from 'react'

export const TodoForm = () => {
    const[value, setValue] = useState('')
  return (
    <form className='TodoForm'>
        <input type='text' className='Todo-input' placeholder='What is task today?'
        onChange={(e) => setValue(e.target.value) }>
        </input>
        <button type='submit' className='Todo-btn'>
        Add Task
        </button>
    </form>
  )
}
