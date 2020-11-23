import React from "react"
import SidebarItem from "./sidebarItem"
import sidebarStyles from "../style-modules/sidebar.module.css"

const Sidebar = ({ authors, types, setFilter }) => {
  return (
    <div className={sidebarStyles.container}>
      <SidebarItem
        id="1"
        key="all"
        name="All"
        selection="all"
        subitems={[]}
        setFilter={setFilter}
      />
      <SidebarItem
        id="2"
        key="authors"
        name="Authors"
        selection="authors"
        subitems={authors}
        setFilter={setFilter}
      />
      <SidebarItem
        id="3"
        key="types"
        name="Types"
        selection="types"
        subitems={types}
        setFilter={setFilter}
      />
    </div>
  )
}

export default Sidebar
