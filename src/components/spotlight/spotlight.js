import React from "react"
import spotlightStyles from "./spotlight.module.css"
import { StaticQuery, graphql, Link } from "gatsby"
import { slugify } from "../../actions/slugify"

const SpotlightComponent = ({ spotlight }) => {
  return (
    <Link
      to={`/writings/${slugify(spotlight.author.name)}/${slugify(
        spotlight.title
      )}`}
    >
      <div className={spotlightStyles.center}>
        <figure>
          <img
            src={spotlight.image.file.url}
            alt={spotlight.image.description}
            height="350"
            width="270"
          />
          <figcaption className={spotlightStyles.caption}>
            <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
              Reading Spotlight
            </span>
            <br />
            <span style={{ fontStyle: "italic" }}>{spotlight.title}</span>
            <br />
            {spotlight.author.name}
          </figcaption>
        </figure>
      </div>
    </Link>
  )
}
export default function Spotlight() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulSpotlight {
            nodes {
              writing {
                author {
                  name
                }
                summary {
                  summary
                }
                title
                image {
                  description
                  file {
                    url
                  }
                }
              }
              contentful_id
            }
          }
        }
      `}
      render={data => (
        <SpotlightComponent
          spotlight={data.allContentfulSpotlight.nodes[0].writing}
        />
      )}
    />
  )
}
