import React from "react"
import Layout from "../components/layout"
import "../styles/404.css"
import { Link } from "gatsby"

const Four = () => (
  <Layout>
    <div className="centerStandalone">
      <div id="fourContainer">
        It seems like you're lost. <Link to="/">Let me help you.</Link>
      </div>
    </div>
  </Layout>
)

export default Four
