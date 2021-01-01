import React, { useState, useEffect } from "react"
import Layout from "../layout"
import Dropdown from "../../components/dropdown/dropdown.js"
import Grid from "../../components/grid/grid.js"
import { graphql } from "gatsby"
import markdownify from "../../actions/markdownify"
import { sortWritings } from "../../actions/sortWritings"
import writingsGridStyles from "./writingsGrid.module.css"

const WritingsGrid = ({ data, pageContext }) => {
  const header =
    pageContext.author === "*"
      ? pageContext.form === "*"
        ? "All Writings"
        : pageContext.form
      : pageContext.author
  const subheader =
    pageContext.author === "*"
      ? false
      : data.allContentfulWriting.nodes[0].author.bio.bio
  /* create a books array that holds all books in array */
  const [writings, setWritings] = useState(data.allContentfulWriting.nodes)
  /* set state for sorting */
  const [sortBy, setSortBy] = useState(0)
  /* this causes a book rerender on change of sorting. */
  useEffect(() => {
    setWritings(sortWritings(sortBy, writings))
  }, [sortBy])
  return (
    <Layout>
      <div className={writingsGridStyles.writingContainer}>
        <h1 className={writingsGridStyles.header}>{header}</h1>
        {subheader && (
          <div
            className={writingsGridStyles.subheader}
            dangerouslySetInnerHTML={markdownify(subheader)}
          />
        )}
        <div className={writingsGridStyles.dropdownContainer}>
          <Dropdown setSortBy={setSortBy} />
        </div>
        <Grid writings={writings} />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($author: String = "*", $form: String = "*") {
    allContentfulWriting(
      filter: {
        author: { name: { glob: $author } }
        form: { form: { glob: $form } }
      }
    ) {
      nodes {
        author {
          name
          bio {
            bio
          }
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

export default WritingsGrid
