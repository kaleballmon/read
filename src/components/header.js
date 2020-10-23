import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../style-modules/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <Link to="/">
        <span className={headerStyles.home}>Read</span>
      </Link>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navlist}>
          <Link to="/about/">
            <li className={headerStyles.navItem}>About</li>
          </Link>
          <Link to="/contact/">
            <li className={headerStyles.navItem}>Contact</li>
          </Link>
          <Link to="/">
            <li className={headerStyles.navItem}>Readings</li>
          </Link>
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
