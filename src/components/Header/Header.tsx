import './Header.css';

import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className='page-title'>MixTape</h1>
      <Link to="/" className="home-button">Home</Link>
    </header>
  )
}

export default Header;