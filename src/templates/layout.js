import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header/header.js"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div id="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kaleb and Words</title>
        <meta
          name="description"
          content="A website that contains books that Kaleb likes to read."
        />
        <link
          rel="icon"
          type="image/png"
          href="https://drive.google.com/uc?export=view&id=1sJIFWeIFZl3zI8b70_5j6OMQRezGN6Te"
        ></link>
      </Helmet>
      <Header />
      {children}
    </div>
  )
}

export default Layout
