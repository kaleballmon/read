import React from "react"
import { Link } from "gatsby"

import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import SidebarItem from "./sidebarItem"
import sidebarStyles from "../style-modules/sidebar.module.css"

const SidebarComponent = ({ data }) => {
  return (
    <div className={sidebarStyles.container}>
      <Link swipe direction="left" to="/writings/">
        <SidebarItem id="1" key="all" name="All" subitems={[]} />
      </Link>
      <SidebarItem
        id="2"
        key="authors"
        name="Authors"
        subitems={data.authors.distinct}
      />
      <SidebarItem
        id="3"
        key="types"
        name="Types"
        subitems={data.types.distinct}
      />
    </div>
  )
}

export default function Sidebar() {
  return (
    <StaticQuery
      query={graphql`
        query {
          authors: allContentfulWriting {
            distinct(field: author___name)
          }
          types: allContentfulWriting {
            distinct(field: type)
          }
        }
      `}
      render={data => <SidebarComponent data={data} />}
    />
  )
}

SidebarComponent.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.shape({
      distinct: PropTypes.array.isRequired,
    }).isRequired,
    types: PropTypes.shape({
      distinct: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}
