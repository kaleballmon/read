import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import Grid from "../components/grid"
import { graphql } from "gatsby"
import { sortWritings } from "../actions/sortWritings"
import "../styles/writings.css"

const Writings = ({ data, pageContext }) => {
  const header =
    pageContext.author === "*"
      ? pageContext.type === "*"
        ? "All Writings"
        : pageContext.type
      : pageContext.author
  /* create a books array that holds all books in array */
  const [writings, setWritings] = useState(data.allContentfulWriting.nodes)
  /* set state for sorting */
  const [sortBy, setSortBy] = useState(0)
  /* this causes a book rerender on change of sorting. */
  useEffect(() => {
    setWritings(sortWritings(sortBy, writings))
  }, [sortBy])
  console.log(header)
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar />
        <div id="catalog">
          <h1 style={{ textAlign: "center" }}>{header}</h1>
          <div id="dropdown-container">
            <Dropdown setSortBy={setSortBy} />
          </div>
          <Grid writings={writings} />
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($author: String = "*", $type: String = "*") {
    allContentfulWriting(
      filter: { author: { name: { glob: $author } }, type: { glob: $type } }
    ) {
      nodes {
        author {
          name
        }
        title
        image {
          description
          file {
            url
          }
        }
        contentful_id
        dateAdded
        datePublished
      }
    }
  }
`

export default Writings
