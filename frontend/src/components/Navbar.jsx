import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <Link to="/tiere" style={{fontSize: "1.5em"}}>Tiere</Link>
        </nav>
    )
}

export default Navbar