import React from "react"

import dropdownStyles from "../style-modules/dropdown.module.css"

const Dropdown = ({ setSortBy }) => {
  return (
    <div>
      <label htmlFor="SortBy">
        <select
          name="SortBy"
          id="SortBy"
          className={dropdownStyles.select}
          onChange={event => setSortBy(event.target.value)}
        >
          <option value="0">Sort By...</option>
          <option value="1">Author: A → Z</option>
          <option value="2">Author: Z → A</option>
          <option value="3">Title: A → Z</option>
          <option value="4">Title: Z → A</option>
          <option value="5">Publishing Date: Oldest → Newest</option>
          <option value="6">Publishing Date: Newest → Oldest</option>
          <option value="7">Posting Date: Oldest → Newest</option>
          <option value="8">Posting Date: Newest → Oldest</option>
        </select>
      </label>
    </div>
  )
}

export default Dropdown
