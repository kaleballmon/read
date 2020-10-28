import React from "react"

import gridItemStyles from "../style-modules/gridItem.module.css"

const GridItem = ({ src, alt, title, author }) => {
  return (
    <div className={gridItemStyles.gridItemContainer}>
      <img src={src} alt={alt} height="200px" width="155px" />
      <div className={gridItemStyles.gridCaption}>
        <span style={{ fontStyle: "italic" }}>{title}</span> <br></br>
        {author}
      </div>
    </div>
  )
}

export default GridItem
