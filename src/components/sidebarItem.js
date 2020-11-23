import React from "react"
import sidebarItemStyles from "../style-modules/sidebarItem.module.css"

const SidebarItem = ({ id, name, selection, subitems, setFilter }) => {
  return (
    <div className={sidebarItemStyles.tab}>
      <input
        type="checkbox"
        id={id}
        onClick={() => {
          if (selection === "all") setFilter({ by: "all", value: "all" })
        }}
      />
      <label htmlFor={id}> {name}</label>
      {subitems.map(subitem => (
        <div
          key={subitem}
          className={sidebarItemStyles.content}
          onClick={() => {
            setFilter({ by: selection, value: subitem })
          }}
        >
          {subitem}
        </div>
      ))}
    </div>
  )
}

export default SidebarItem
