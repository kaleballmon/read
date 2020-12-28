import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"
import Burger from "./burger/burger.js"
import FlatNav from "./flatNav/flatNav.js"

const Header = () => (
  <header className={headerStyles.header}>
    <Link to="/">
      <span className={headerStyles.home}>Read</span>
    </Link>
    <span className={headerStyles.burger}>
      <Burger>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/writings/">Writings</Link>
      </Burger>
    </span>
    <span className={headerStyles.flatNav}>
      <FlatNav />
    </span>
  </header>
)

export default Header
