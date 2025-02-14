import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Calculator</div>
        <button className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                'navLinks ' + (isActive ? 'active-link' : '')
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                'navLinks ' + (isActive ? 'active-link' : '')
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                'navLinks ' + (isActive ? 'active-link' : '')
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
