import React from "react"
import Layout from "../templates/layout"

import "../styles/about.css"

const About = () => {
  return (
    <Layout>
      <div className="centerStandalone">
        <div className="aboutContainer">
          My name is Kaleb. I'm a Computer Science Student at New York
          University. I'm sharing things that I've read that are cool to me or
          have informed who I am. I <em>usually</em> read a good bit, so this
          will be updated often. Keep coming back to check! If you're looking
          for my software projects, you can head to my{" "}
          <a
            href="https://github.com/kaleballmon"
            target="_blank"
            rel="noreferrer"
            id="githubLink"
          >
            github
          </a>
          , where I keep all of that stuff.
        </div>
      </div>
    </Layout>
  )
}

export default About
