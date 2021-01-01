import React from "react"
import flatNavStyles from "./flatNav.module.css"
import { Link } from "gatsby"

const FlatNav = () => (
  <nav id={flatNavStyles.flatNav}>
    <ul className={flatNavStyles.navlist}>
      <Link to="/">
        <li className={flatNavStyles.navItem}>About</li>
      </Link>
      <Link to="/contact/">
        <li className={flatNavStyles.navItem}>Contact</li>
      </Link>
      <Link to="/writings/">
        <li className={flatNavStyles.navItem}>Writings</li>
      </Link>
    </ul>
  </nav>
)

export default FlatNav
