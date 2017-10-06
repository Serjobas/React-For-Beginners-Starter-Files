import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav (props){
  return (
    <ul className="nav-link">
      <li>
        <NavLink exact activeClassName='activeNav' to='/'>Select</NavLink>
      </li>
      <li>
        <NavLink activeClassName='activeNav' to='/popular'>Popular</NavLink>
      </li>
    </ul>
  )
}

export default Nav;
