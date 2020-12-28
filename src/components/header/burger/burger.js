import { slide as Menu } from "react-burger-menu"
import React from "react"
import { styles } from "./headerBurgerStyles"

const Burger = ({ children }) => (
  <Menu styles={styles} right disableAutoFocus>
    {children}
  </Menu>
)

export default Burger
