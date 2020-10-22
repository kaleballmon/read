import React from "react"
import spotlightStyles from "../style-modules/spotlight.module.css"

const Spotlight = () => {
  return (
    <div className={spotlightStyles.center}>
      <figure>
        <div className={spotlightStyles.fauxImg}>A picture will be here</div>
        <figcaption className={spotlightStyles.caption}>
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
