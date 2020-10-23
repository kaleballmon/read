import React from "react"

import dropdownStyles from "../style-modules/dropdown.module.css"

const Dropdown = () => {
  return (
    <div>
      <label for="SortBy">
        <select name="SortBy" id="SortBy" className={dropdownStyles.select}>
          <option>Author: A → Z</option>
          <option>Author: Z → A</option>
          <option>Title: A → Z</option>
          <option>Title: Z → A</option>
          <option>Release Date: Oldest → Newest</option>
          <option>Release Date: Newest → Oldest</option>
          <option>Post Date: Oldest → Newest</option>
          <option>Post Date: Newest → Oldest</option>
        </select>
      </label>
    </div>
  )
}

export default Dropdown
