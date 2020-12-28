import React from "react"

import Layout from "../templates/layout"
import Spotlight from "../components/spotlight/spotlight.js"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Spotlight />
    </Layout>
  )
}

export default IndexPage
