import React from "react"

import Layout from "../components/layout"
import Spotlight from "../components/spotlight"

import photo from "../images/a-letter-to-my-nephew.jpg"

const IndexPage = () => (
  <Layout>
    <Spotlight
      src={photo}
      alt={"Profile of James Baldwin"}
      title="A Letter to My Nephew"
      author="James Baldwin"
    />
  </Layout>
)

export default IndexPage
