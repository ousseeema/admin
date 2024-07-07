import { useState } from 'react'

import './App.css'
import Header from './Header'
import SideBar from './sideBar'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='grid-container'>
    <Header />
    <SideBar />
    <Home />

  </div>
  )
}

export default App
