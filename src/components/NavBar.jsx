import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"

function NavBar() {

  function closeMenu(){
    document.getElementById("links-burger").style.display = "none"
    document.getElementById("icon-x").style.fontSize = "0px"
  }
  function openMenu(){
    document.getElementById("links-burger").style.display = "flex"
    document.getElementById("icon-x").style.fontSize = "48px"
  }

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
      <i class="fa-solid fa-bars icon" id='icon-burger' onClick={openMenu}></i>
      <div className="burger-menu">
      <i class="fa-solid fa-x icon-x" onClick={closeMenu} id='icon-x'></i>
        <div className="links-burger" id='links-burger'>
        <Link className='nav-link-burger' to={"/"}>Home</Link>
          <Link className='nav-link-burger' to={"/cryptocurencies"}>Cryptocurencies</Link>
          <Link className='nav-link-burger' to={"/markets"}>Coin Market</Link>
          <Link className='nav-link-burger' to={"#contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar