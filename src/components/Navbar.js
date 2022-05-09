import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PropContext } from '../App';

function Navbar() {
  const navbarProps = useContext(PropContext);
  const { isSidebarOpen, setIsOpen, cart, toggleSidebar } = navbarProps;

  const itemCountBadge = () => {
    return <p className="item-count">{cart.total_items}</p>;
  };

  return (
    <div className="navbar">
      <button
        type="button"
        className="hamburger-nav-button"
        onClick={() => toggleSidebar(!isSidebarOpen)} // toggleSidebar(!isSidebarOpen)
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="navbar-wrapper">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <button type="button" onClick={() => setIsOpen(true)}>
          Contact
        </button>
        <button type="button">About</button>
        <Link to="/cart">
          <button type="button">
            <ShoppingCartIcon />
            {cart.total_items > 0 && itemCountBadge()}
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
