import React from 'react';
import './Header.css';
import logo from '../../assets/react.svg';

const Header = () => {
  return (
    <div className='Header'>
      <img src={logo }/>
    </div>
  )
}

export default Header