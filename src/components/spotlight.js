import React from "react"
import spotlightStyles from "../style-modules/spotlight.module.css"

const Spotlight = ({ src, alt, title, author }) => {
  return (
    <div className={spotlightStyles.center}>
      <figure>
        <img src={src} alt={alt} height="350" width="270" />
        <figcaption className={spotlightStyles.caption}>
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            Reading Spotlight
          </span>
          <br />
          <span style={{ fontStyle: "italic" }}>{title}</span>
          <br />
          {author}
        </figcaption>
      </figure>
    </div>
  )
}

export default Spotlight
