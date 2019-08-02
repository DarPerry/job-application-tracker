import React, { useEffect } from 'react';

const NavBar = () => {

  const indicatorRef = React.createRef();

  const setActive = (e) => {

    const navItem = e.target;

    e.preventDefault();
    removeActiveClassAll();
    setActiveItem(navItem);
    moveNavIndicator();
  }

  const getActiveColor = (status) => {

    const activeColorDictionary = {
      all: 'black',
      pending: 'blue',
      applied: 'pink',
      'in progress': 'orange',
      interviewing: 'yellow',
      offered: 'green',
      denied: 'red'
    };

    return activeColorDictionary[status.toLowerCase()];
  };

  const removeActiveClassAll = () => {
    document.querySelectorAll('.header__nav-item').forEach((item) => {
      item.classList.remove('active');
      item.removeAttribute('style');
    });
  }

  const setActiveItem = (item) => {
    item.classList.toggle('active');
    item.style.color = getActiveColor(item.text);
  }

  const moveNavIndicator = () => {
    const activeItem = document.querySelector('.active');
    const indicatorStyle = indicatorRef.current.style;

    indicatorStyle.width = `${activeItem.offsetWidth}px`;
    indicatorStyle.left = `${activeItem.offsetLeft}px`;
    indicatorStyle.backgroundColor = getActiveColor(activeItem.text);
  }

  return (
    <header className="header">
      <div className="header__brand">Job Appliaction Tracker</div>
      <nav className="header__nav">
        <a onClick={setActive} className="header__nav-item active" href="#">All</a>
        <a onClick={setActive} className="header__nav-item" href="#">Pending</a>
        <a onClick={setActive} className="header__nav-item" href="#">Applied</a>
        <a onClick={setActive} className="header__nav-item" href="#">In Progress</a>
        <a onClick={setActive} className="header__nav-item" href="#">Interviewing</a>
        <a onClick={setActive} className="header__nav-item" href="#">Offered</a>
        <a onClick={setActive} className="header__nav-item" href="#">Denied</a>
        <span ref={indicatorRef} className="header__nav-indicator"></span>
      </nav>
    </header>
  )
};


export default NavBar;