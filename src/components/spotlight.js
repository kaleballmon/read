import React from "react"
import spotlightStyles from "./spotlight.module.css"

const Spotlight = () => {
  return (
    <div className={spotlightStyles.center}>
      <figure>
        <div className={spotlightStyles.fauxImg}>A picture will be here</div>
        <figcaption>
          reading spotlight
          <br />
          bookname
          <br />
          author
        </figcaption>
      </figure>
    </div>
  )
}

export default Spotlight
