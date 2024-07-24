import React from "react";
import { BsPersonFill, BsTruck, BsFileEarmarkTextFill, BsSpeedometer2, BsEnvelopeFill, BsGearFill  } from 'react-icons/bs'
import { Link } from 'react-router-dom';
function SideBar({openSidebarToggle, OpenSidebar}) {
  return(
    <aside id = "sidebar" className={openSidebarToggle? "sidebar-responsive":"" }>
      <div className="sidebar-title">
        <div className="sidebar-brand">
            TransMobile

        </div>
        <span className="icon close_icon" onClick={OpenSidebar} >
          X
        </span>
      </div>
      <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <Link to="/dashboard">
          <BsSpeedometer2 className="icon"/> Dashboard
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/transporter">
          <BsTruck className="icon"/> Transporter
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/user">
          <BsPersonFill className="icon"/> User
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/client-pro-request">
          <BsEnvelopeFill className="icon"/> Client Pro Request
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/trans-pro-request">
          <BsEnvelopeFill className="icon"/> Trans Pro Request
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/clients-reports">
          <BsFileEarmarkTextFill className="icon"/> Clients Reports
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/trans-reports">
          <BsFileEarmarkTextFill className="icon"/> Trans Reports
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/settings">
          <BsGearFill className="icon"/> Settings
        </Link>
      </li>
    </ul>
    </aside>
  )
}

export default SideBar;