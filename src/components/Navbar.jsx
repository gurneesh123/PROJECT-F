import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="http://https://project-f-bsis.vercel.app"><i className="fa-solid fa-home nav-icon"></i> Home</a></li>
        <li><a href="http://https://project-f-bsis.vercel.app/items"><i className="fa-solid fa-shop nav-icon"></i> Shop</a></li>
        <li><a href="#"><i className="fa-solid fa-concierge-bell nav-icon"></i> Services</a></li>
        <li><a href="http://https://project-f-bsis.vercel.app/aboutus"><i className="fa-solid fa-info-circle nav-icon"></i> About</a></li>
        <li><a href="http://https://project-f-bsis.vercel.app/contact"><i className="fa-solid fa-envelope nav-icon"></i> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
