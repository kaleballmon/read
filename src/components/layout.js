import React from "react"

import Header from "./header"
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
