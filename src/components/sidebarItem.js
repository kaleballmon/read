import React from "react"
import sidebarItemStyles from "../style-modules/sidebarItem.module.css"

const SidebarItem = ({ id }) => {
  return (
    <div className={sidebarItemStyles.tab}>
      <input type="checkbox" id={id} />
      <label for={id}> Example Clicker</label>
      <div className={sidebarItemStyles.content}>Yes this works</div>
    </div>
  )
}

export default SidebarItem
