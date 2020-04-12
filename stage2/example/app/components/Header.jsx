import React from "react";
import {Link} from "@reach/router";

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-item brand">Stage2</div>
        <Link className="header-item" to="/">Главная</Link>
        <Link className="header-item" to="/counter">Счетчик</Link>
        <Link className="header-item" to="/users">Пользователи Github</Link>
      </div>
    </header>
  )
}
export {Header}