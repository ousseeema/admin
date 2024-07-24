import { useState } from 'react'

import './App.css'
import Header from './Header'

import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transporter from './pages/Transporter';
import User from './pages/User';
import ClientProRequest from './pages/ClientProRequest';
import TransProRequest from './pages/TransProRequest';
import ClientsReports from './pages/ClientsReports';
import TransReports from './pages/TransReports';
import Settings from './pages/Settings';
function App() {
  const [openSidebarToggle, setOpenSideBarToggle] = useState(false)
  const  openSidebar = ()=>{
    setOpenSideBarToggle(!openSidebarToggle)
  }
   
  return (
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={openSidebar} />
      <div className='main-content'>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transporter" component={Transporter} />
          <Route path="/user" component={User} />
          <Route path="/client-pro-request" component={ClientProRequest} />
          <Route path="/trans-pro-request" component={TransProRequest} />
          <Route path="/clients-reports" component={ClientsReports} />
          <Route path="/trans-reports" component={TransReports} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Home} exact /> {/* Home route as default */}
        </Switch>
      </div>
    </div>
  </Router>
  )
}

export default App
