import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
     <li>
      <NavLink to="/" exact>2006</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">2007</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">2008</NavLink>
    </li>
    <li>
      <NavLink to="/auth">2009</NavLink>
    </li>
  </ul>
};

export default NavLinks;