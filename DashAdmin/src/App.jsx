import { useState } from 'react'

import './App.css'
import Header from './Header'
import SideBar from './sideBar'
import Home from './Home'

function App() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)
  const  openSideBar = ()=>{
    setOpenSideBarToggle(!openSideBarToggle)
  }
   
  return (
  <div className='grid-container'>
    <Header  OpenSideBar={openSideBar}/>
    <SideBar OpenSideBarToggle ={openSideBarToggle} />
    <Home />

  </div>
  )
}

export default App
