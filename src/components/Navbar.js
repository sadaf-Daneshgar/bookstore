import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import UserIcon from './icons';

function Navbar() {
  return (
    <>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" id="imp" to="/">
              <span>Bookstore CMS</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="imp2" to="/">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="imp3" to="/category">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <UserIcon />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
