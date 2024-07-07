import React from "react";
import {BsCart3} from 'react-icons/bs'
function SideBar() {
  return(
    <aside>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header"/> SHOP

        </div>
        <span className="icon close_icon">
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> Dashbord
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> Transporter
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> User
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> Client Pro Request
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> Transporter Pro Request
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCart3  className="icon"/> Reports
          </a>
        </li>

      </ul>
    </aside>
  )
}

export default SideBar;