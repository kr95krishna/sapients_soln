import React from 'react';

import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const SideDrawer = props => {
  return (
    <React.Fragment>
    <aside className="side-drawer">
      <h3>Filters</h3>
      <ul className="nav-links">
      <p>Launch Year</p>
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
    <p>Successful Launch</p>
      <ul>
          <li>
             <NavLink to="/True/Successful_Launch" exact>True</NavLink>
          </li>
          <li>
             <NavLink to="/False/Successful_Launch" exact>False</NavLink>
          </li>
          </ul>
      <p>Successful Landing</p>
      <ul>
          <li>
            <NavLink to="/True/Successful_Launch" exact>True</NavLink>
          </li>
          <li>
           <NavLink to="/Successful_Launch" exact>False</NavLink>
           </li>
          </ul>
    </ul>
    
      </aside>
      </React.Fragment>
  )};

export default SideDrawer;