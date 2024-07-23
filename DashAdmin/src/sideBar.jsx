import React from "react";
import { BsPersonFill, BsTruck, BsFileEarmarkTextFill, BsSpeedometer2, BsEnvelopeFill, BsGearFill  } from 'react-icons/bs'
function SideBar({openSideBarToggle}) {
  return(
    <aside id = "sidebar" className={openSideBarToggle? "sidebar-responsive":"" }>
      <div className="sidebar-title">
        <div className="sidebar-brand">
            TransMobile

        </div>
        <span className="icon close_icon">
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsSpeedometer2  className="icon"/> Dashbord
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsTruck  className="icon"/> Transporter
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPersonFill  className="icon"/> User
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsEnvelopeFill  className="icon"/> Client Pro Request
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsEnvelopeFill  className="icon"/> Trans Pro Request
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFileEarmarkTextFill  className="icon"/> Clients Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFileEarmarkTextFill  className="icon"/> Trans Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsGearFill  className="icon"/> Settings
          </a>
        </li>

      </ul>
    </aside>
  )
}

export default SideBar;