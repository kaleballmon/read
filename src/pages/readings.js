import React from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import "../styles/readings.css"

const Readings = () => {
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar />
        <div id="catalog">
          <Dropdown />
        </div>
      </div>
    </Layout>
  )
}

export default Readings
