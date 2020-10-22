import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.home}>Read</div>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navlist}>
          <li className={headerStyles.navItem}>About</li>
          <li className={headerStyles.navItem}>Contact</li>
          <li className={headerStyles.navItem}>Readings</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
