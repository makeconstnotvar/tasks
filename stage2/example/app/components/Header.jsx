import React from "react";
import {NavLink} from "./NavLink";

const Header = props => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="header-item brand">Stage:2</div>
        <div className="flex-right">
          <NavLink className="header-item" to="/">Главная</NavLink>
          <NavLink className="header-item" to="/counter">Счетчик</NavLink>
          <NavLink className="header-item" to="/users">Пользователи (Class)</NavLink>
          <NavLink className="header-item" to="/users-alt">Пользователи (Func)</NavLink>
        </div>
      </div>
    </header>
  )
}

export {Header}