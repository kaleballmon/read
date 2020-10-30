import React from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import GridItem from "../components/gridItem"
import { graphql } from "gatsby"
import "../styles/readings.css"

const Readings = ({ data }) => {
  const books = data.allMongodbReadBooks.nodes
  const imageFiles = data.allFile.nodes
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar />
        <div id="catalog">
          <div id="dropdown-container">
            <Dropdown />
          </div>
          <div id="readings-grid">
            {books.map(book => (
              <GridItem
                title={book.name}
                author={book.author}
                src={
                  imageFiles.find(
                    imageFile => imageFile.name === book.image.filename
                  ).publicURL
                }
                alt={book.image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    allMongodbReadBooks {
      nodes {
        id
        name
        author
        type
        image {
          filename
          alt
        }
      }
    }
    allFile {
      nodes {
        id
        publicURL
        name
      }
    }
  }
`

export default Readings
