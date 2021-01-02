import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
import individualWritingStyles from "./individualWriting.module.css"
import { slugify } from "../../actions/slugify"
import markdownify from "../../actions/markdownify"

const IndividualWriting = ({ data, pageContext }) => {
  const node = data.allContentfulWriting.nodes[0]

  return (
    <Layout>
      <div className={individualWritingStyles.container}>
        <img
          src={node.image.file.url}
          alt={node.image.description}
          height="260"
          width="200"
        />
        <div className={individualWritingStyles.caption}>
          <div className={individualWritingStyles.title}>{node.title}</div>
          <div>
            <Link
              className={individualWritingStyles.anchor}
              to={`/writings/${slugify(node.author.name)}`}
            >
              {node.author.name}
            </Link>
          </div>
        </div>
        <div
          className={individualWritingStyles.summary}
          dangerouslySetInnerHTML={markdownify(node.summary.summary)}
        />
        <div className={individualWritingStyles.etc}>
          <div>
            Form:{" "}
            <Link
              className={individualWritingStyles.anchor}
              to={`/writings/${slugify(node.form.form)}`}
            >
              {node.form.form}
            </Link>
          </div>
          <div>Year Published: {node.yearPublished}</div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($id: String) {
    allContentfulWriting(filter: { contentful_id: { eq: $id } }) {
      nodes {
        yearPublished
        title
        form {
          form
        }
        author {
          name
        }
        contentful_id
        summary {
          summary
        }
        image {
          file {
            url
          }
          description
        }
      }
    }
  }
`

export default IndividualWriting
