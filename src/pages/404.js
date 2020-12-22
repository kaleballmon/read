import React from "react"
import Layout from "../components/layout"
import "../styles/404.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Four = () => (
  <Layout>
    <div className="centerStandalone">
      <div id="fourContainer">
        It seems like you're lost.{" "}
        <AniLink swipe direction="left" to="/">
          Let me help you.
        </AniLink>
      </div>
    </div>
  </Layout>
)

export default Four
