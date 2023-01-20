import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Header = () => {
  return (
    <div id='header'>
      <div className="container">
        <nav>
        <NavLink><h2> Movie App </h2></NavLink>
        <NavLink> <img src="https://www.seekpng.com/png/full/72-729756_how-to-add-a-new-user-to-your.png" width={"50px"} alt="" /> </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header