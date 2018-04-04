import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">

      <ul className="navbar-nav mr-auto">

        <NavItem>
          <NavLink to="/users" href="#" className="nav-link">All Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tasks" href="#" className="nav-link">All tasks</NavLink>
        </NavItem>
      </ul>

    </nav>
  );
}