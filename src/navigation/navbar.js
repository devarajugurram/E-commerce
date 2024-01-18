import React from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import './navbar.css';

const Navbar = ({ query, handleInputChange, handleHomeClick, handleShow, cartCount , setCartVisible}) => {
  const handleCartClick = () => {
    handleShow(true);
    setCartVisible(true);
  };

  return (
    <nav>
      <div className="nav-icons">
        <a href="#" onClick={handleHomeClick}>
          <AiFillHome className="nav-icons" />
        </a>
      </div>
      <div className="title">
        <h1>Collection</h1>
      </div>
      <div className="nav-container">
        <input
          className="search"
          type="text"
          placeholder="search"
          name="search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="nav-icons">
        <a href="#" onClick={handleCartClick}>
          <AiOutlineHistory className="nav-icons" />
          {cartCount > 0 && <sup>{cartCount}</sup>}
        </a>
        <a href="#">
          <RiUserAddLine className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
