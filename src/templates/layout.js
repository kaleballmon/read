import React from "react"

import Header from "../components/header/header.js"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div id="app">
      <Header />
      {children}
    </div>
  )
}

export default Layout
