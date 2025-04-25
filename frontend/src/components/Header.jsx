import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Gruppenarbeit / Hausaufgabe</h1>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header