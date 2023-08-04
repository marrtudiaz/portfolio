import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = props.name;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scroll({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={`#${props.name}`}
      style={{
        textDecoration: 'none',
        color: '#000',
        fontSize: '17px',
      }}
      onClick={handleClick}
    >
      <li>
        <i className='bx bx-history'></i>
        {props.name}
      </li>
    </a>
  );
};

export default MenuItem;