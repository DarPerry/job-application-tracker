import React from 'react';

const NavBar = () => (
  <header className="header">
    <div className="header__brand">Job Appliaction Tracker</div>
    <nav className="header__nav">
      <a className="header__nav-item" href="#">All</a>
      <a className="header__nav-item" href="#">Pending</a>
      <a className="header__nav-item" href="#">Applied</a>
      <a className="header__nav-item" href="#">In Progress</a>
      <a className="header__nav-item" href="#">Interviewing</a>
      <a className="header__nav-item" href="#">Offered</a>
      <a className="header__nav-item" href="#">Denied</a>
    </nav>
  </header>
);

export default NavBar;