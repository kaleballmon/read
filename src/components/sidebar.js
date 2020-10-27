import React from "react"
import SidebarItem from "./sidebarItem"
import sidebarStyles from "../style-modules/sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={sidebarStyles.container}>
      <SidebarItem id="1" />
      <SidebarItem id="2" />
      <SidebarItem id="3" />
    </div>
  )
}

export default Sidebar
