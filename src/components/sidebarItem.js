import React from "react"
import sidebarItemStyles from "../style-modules/sidebarItem.module.css"

const SidebarItem = ({ id, name }) => {
  return (
    <div className={sidebarItemStyles.tab}>
      <input type="checkbox" id={id} />
      <label for={id}> {name}</label>
      <div className={sidebarItemStyles.content}>Yes this works</div>
      <div className={sidebarItemStyles.content}>Cool</div>
    </div>
  )
}

export default SidebarItem
