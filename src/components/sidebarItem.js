import React from "react"
import sidebarItemStyles from "../style-modules/sidebarItem.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SidebarItem = ({ id, name, subitems }) => {
  return (
    <div className={sidebarItemStyles.tab}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}> {name}</label>
      {subitems.map(subitem => {
        const slug = subitem
          .replace(/\s+/g, "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
        return (
          <div key={subitem} className={sidebarItemStyles.content}>
            <AniLink swipe direction="left" to={`/writings/${slug}`}>
              {subitem}
            </AniLink>
          </div>
        )
      })}
    </div>
  )
}

export default SidebarItem
