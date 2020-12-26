import { Link } from "gatsby"
import React, { useState } from "react"
import headerStyles from "../style-modules/header.module.css"
import Burger from "../components/burger"
import FlatNav from "../components/flatNav"

const Header = () => (
  <header className={headerStyles.header}>
    <Link to="/">
      <span className={headerStyles.home}>Read</span>
    </Link>
    <span className={headerStyles.burger}>
      <Burger />
    </span>
    <span className={headerStyles.flatNav}>
      <FlatNav />
    </span>
  </header>
)

export default Header
