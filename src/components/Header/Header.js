import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/country">Country</a>
                <a href="/blog">Blog</a>
                <a href="/home">Contact</a>
            </nav>
        </div>
    );
};

export default Header;