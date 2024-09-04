import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src='' alt='' />
      </div>
      <div className="sidebar-menu">
       <ul>
        <li><h3>Overview</h3></li>
        <li><h3>Chart</h3></li>
        <li><h3>Transactions</h3></li>
        <li><h3>Mail Box</h3></li>
        <li><h3>Settings</h3></li>
        <li><h3>Logout</h3></li>
      </ul>
      </div>
    </div>
  )
}
