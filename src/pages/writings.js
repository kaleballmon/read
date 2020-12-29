import React from "react"
import Layout from "../templates/layout"
import "../styles/writingsLanding.css"
import { Link, graphql } from "gatsby"

const Writings = ({ data }) => {
  const authors = data.authors.distinct.sort((author1, author2) =>
    author1.localeCompare(author2)
  )
  const forms = data.forms.distinct.sort((form1, form2) =>
    form1.localeCompare(form2)
  )
  return (
    <Layout>
      <div className="pageContainer">
        <div className="listContainer">
          <div className="subsection">
            <Link to="/writings/all">
              <h1 className="heading">All</h1>
            </Link>
          </div>
          <div className="subsection">
            <h1 className="heading">Authors</h1>
            <div className="sublistContainer">
              {authors.map(subitem => {
                const slug = subitem
                  .replace(/\s+/g, "")
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                return (
                  <div key={subitem}>
                    <Link to={`/writings/${slug}`}>{subitem}</Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="subsection">
            <h1 className="heading">Forms</h1>
            <div className="sublistContainer">
              {forms.map(subitem => {
                const slug = subitem
                  .replace(/\s+/g, "")
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                return (
                  <div key={subitem}>
                    <Link to={`/writings/${slug}`}>{subitem}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    forms: allContentfulForm {
      distinct(field: form)
    }
    authors: allContentfulAuthor {
      distinct(field: name)
    }
  }
`

export default Writings
