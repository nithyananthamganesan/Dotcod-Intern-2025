import React from 'react'
import { navLink } from '../../assets/util/constants'

const NavItem = () => {
  return (
    <div className='nav-items-wrapper'>
      <div className="nav-items">
        {navLink.map((item)=>(
            <ul>
                <li >{item}</li>
            </ul>
        ))}
      </div>
    </div>
  )
}

export default NavItem
