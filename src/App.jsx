import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { supabase } from '../client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Home/>
    </div>
    </>
  )
}

export default App
