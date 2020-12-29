import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../actions/slugify"
import gridItemStyles from "./gridItem.module.css"

const GridItem = ({ src, alt, title, author, key, id }) => {
  const authorSlug = slugify(author)
  const titleSlug = slugify(title)
  return (
    <Link to={`/writings/${authorSlug}/${titleSlug}`}>
      <div className={gridItemStyles.gridItemContainer} key={key}>
        <img src={src} alt={alt} height="200px" width="155px" />
        <div className={gridItemStyles.gridCaption}>
          <span style={{ fontStyle: "italic" }}>{title}</span> <br></br>
          {author}
        </div>
      </div>
    </Link>
  )
}

export default GridItem
