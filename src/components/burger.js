import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import React from "react"
import "../styles/burger.css"

const Burger = () => (
  <Menu right disableAutoFocus>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Link to="/writings/">Writings</Link>
  </Menu>
)

export default Burger
