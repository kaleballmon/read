import React from "react"
import SidebarItem from "./sidebarItem"
import sidebarStyles from "../style-modules/sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={sidebarStyles.container}>
      <SidebarItem id="1" name="All" />
      <SidebarItem id="2" name="Authors" />
      <SidebarItem id="3" name="Types" />
    </div>
  )
}

export default Sidebar
