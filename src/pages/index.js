import React from "react"
import { Link } from "gatsby"
import Layout from "../templates/layout"

import "../styles/about.css"

const About = () => {
  return (
    <Layout>
      <div className="centerStandalone">
        <div className="aboutContainer">
          My name is Kaleb. I coded and designed this website to share things
          that I've read that are cool to me or have informed who I am. I{" "}
          <em>usually</em> read a good bit, so this will be updated often.
          <br />
          <br />
          If you're just looking around, start by checking out the what's in the{" "}
          <Link className="glowLink" to="/spotlight">
            spotlight
          </Link>
          .
        </div>
      </div>
    </Layout>
  )
}

export default About
