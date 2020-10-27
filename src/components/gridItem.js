import React from "react"

import gridItemStyles from "../style-modules/gridItem.module.css"

const GridItem = () => {
  return (
    <div className={gridItemStyles.gridItemContainer}>
      <div className={gridItemStyles.gridBorder}>
        <p>This is an example of what a book will look like in a grid</p>
      </div>
      <div>
        <p>
          Book Title <br></br>Author
        </p>
      </div>
    </div>
  )
}

export default GridItem
