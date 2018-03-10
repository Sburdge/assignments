import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className="navbarContainer">
            <div>
                <span>RTV!</span>
            </div>
            <div>
                <Link to="/"> • Home</Link>
                <Link to="/topics"> • Topics</Link>
                <Link to="/about"> • About</Link>
            </div>
        </div>
    )
}

export default Navbar;
