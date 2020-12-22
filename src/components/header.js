import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import headerStyles from "../style-modules/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <AniLink swipe direction="left" to="/">
        <span className={headerStyles.home}>Read</span>
      </AniLink>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navlist}>
          <AniLink swipe direction="left" to="/about/">
            <li className={headerStyles.navItem}>About</li>
          </AniLink>
          <AniLink swipe direction="left" to="/contact/">
            <li className={headerStyles.navItem}>Contact</li>
          </AniLink>
          <AniLink swipe direction="left" to="/writings/">
            <li className={headerStyles.navItem}>Writings</li>
          </AniLink>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
