import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import Sidebar from "../components/sidebar"
import GridItem from "../components/gridItem"
import { sortBooks } from "../actions/sortBooks"
import { filterBooks } from "../actions/filterBooks"
import { graphql } from "gatsby"
import "../styles/readings.css"

const Readings = ({ data }) => {
  /* create a books array that holds all books in array */
  const [books] = useState(data.allMongodbReadBooks.nodes)

  /* This is state that I can manipulate for displaying */
  const [displayBooks, setDisplayBooks] = useState(books)

  /* creates an array of author objects and sorts them for the sidebar */
  const [authors] = useState(
    data.allMongodbReadAuthors.nodes
      .sort((author1, author2) => author1.name.localeCompare(author2.name))
      .map(author => author.name)
  )

  /* get distinct types. do this by getting the unique values and then sort */
  const [types] = useState(
    [...new Set(books.map(book => book.type))].sort((type1, type2) =>
      type1.localeCompare(type2)
    )
  )

  /* have the image file nodes in arry to find */
  const [imageFiles] = useState(data.allFile.nodes)

  /* set state for sorting */
  const [sortBy, setSortBy] = useState(0)

  /* set state for filtering */
  const [filter, setFilter] = useState({ by: "all", value: "all" })

  /* this causes a book rerender on change of sorting. We only want to sort displayBooks to not mess up filtering */
  useEffect(() => {
    setDisplayBooks(sortBooks(sortBy, displayBooks))
  }, [sortBy])

  useEffect(() => {
    setDisplayBooks(filterBooks(filter, books))
  }, [filter])

  /* this will cause a rerender whenever state changeds */
  return (
    <Layout>
      <div id="readingContainer">
        <Sidebar authors={authors} types={types} setFilter={setFilter} />
        <div id="catalog">
          <div id="dropdown-container">
            <Dropdown setSortBy={setSortBy} />
          </div>
          <div id="readings-grid">
            {displayBooks.map(book => (
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
        isVisible
      }
    }
    allMongodbReadAuthors {
      nodes {
        id
        name
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
