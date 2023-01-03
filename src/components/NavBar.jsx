import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className="logo">
        <div className="logo-bubble"></div>
        <h2><a href="#">The Coin</a></h2>
      </div>
      <div className="nav-link-list">
          <Link className='nav-link' to={"/"}>Home</Link>
          <Link className='nav-link' to={"/cryptocurencies"}>Cryptocurencies</Link>
          <Link className='nav-link' to={"/markets"}>Coin Market</Link>
          <Link className='nav-link' to={"#contact"}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar