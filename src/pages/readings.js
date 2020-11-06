import React, { useState } from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import GridItem from "../components/gridItem"
import { graphql } from "gatsby"
import "../styles/readings.css"

const Readings = ({ data }) => {
  let books = data.allMongodbReadBooks.nodes
  const imageFiles = data.allFile.nodes
  const [sortBy, setSortBy] = useState(0)

  const sortBooks = (option, books) => {
    switch (parseInt(option)) {
      case 1:
        books.sort((book1, book2) => book1.author.localeCompare(book2.author))
        break
      case 2:
        books.sort(
          (book1, book2) => -1 * book1.author.localeCompare(book2.author)
        )
        break
      case 3:
        books.sort((book1, book2) => book1.title.localeCompare(book2.title))
        break
      case 4:
        books.sort(
          (book1, book2) => -1 * book1.title.localeCompare(book2.title)
        )
        break
      default:
        break
    }
  }

  sortBooks(sortBy, books)
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar />
        <div id="catalog">
          <div id="dropdown-container">
            <Dropdown setSortBy={setSortBy} />
          </div>
          <div id="readings-grid">
            {books.map(book => (
              <GridItem
                title={book.title}
                author={book.author}
                key={book.id}
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
        title
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
