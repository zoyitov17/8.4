import { useState } from 'react'
import './App.css'
import Button from './components/todo-btn/todoBtn'

function App() {

  return (
    <div className='max-w-[1320px] flex items-center justify-center h-[100vh] mx-auto my-0 bg-[rgba(13,7,20,1)]'>
      <div className='w-2/5 h-4/5 rounded-3xl flex justify-center bg-[rgba(29,24,37,1)]'>
        <Button />
      </div>
    </div>      
  )
}

export default App
