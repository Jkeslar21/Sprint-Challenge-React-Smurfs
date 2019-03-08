import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <NavLink to='/'exact className='nav-link'>Smurf Villagers</NavLink>
      <NavLink to='/smurf-form' exact className='nav-link'>Add Smurf</NavLink>
    </div>
  )
}
