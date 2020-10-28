import React from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import GridItem from "../components/gridItem"
import "../styles/readings.css"
import photo from "../images/a-letter-to-my-nephew.jpg"

const Readings = () => {
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar />
        <div id="catalog">
          <div id="dropdown-container">
            <Dropdown />
          </div>
          <div id="readings-grid">
            <GridItem
              title="A Letter to My Nephew"
              author="James Baldwin"
              src={photo}
              alt="Profile of James Baldwin"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Readings
