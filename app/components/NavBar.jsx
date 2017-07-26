import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-default nav nav-justified nav-pills">
      {/*{location.href.substr(24, 33) === 'campuses' || location.href.substr(24, 33) === '' ?*/}
      <li role="presentation" className="active">
        <NavLink to="/categories"><h2>Categories</h2></NavLink>
      </li>
      <li role="presentation">
        <NavLink to="/login" ><h2>Login</h2></NavLink>
      </li>
      <li>
        <NavLink to="/signUp"><h2>Sign Up</h2></NavLink>
      </li>
    </nav>
  );
};
export default NavBar;
