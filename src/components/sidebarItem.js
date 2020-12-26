import React from "react"
import sidebarItemStyles from "../style-modules/sidebarItem.module.css"
import { Link } from "gatsby"

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
            <Link to={`/writings/${slug}`}>{subitem}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default SidebarItem
