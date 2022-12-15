import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  
    return (
        <nav className="header">
            <h1>Gatsby</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
            )
}

export default Header