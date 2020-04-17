import React from "react";
import {Link} from "@reach/router";

const NavLink = props => {
  return <Link getProps={isActive(props.className)} {...props}/>
}

const isActive = className => {
  let allClassNames;
  if (typeof className === 'string')
    allClassNames = new Set(className.replace(/\s+/, ' ').split(' '));
  else
    allClassNames = new Set();

  return (props) => {
    if (props.isCurrent)
      allClassNames.add("active")
    else
      allClassNames.delete("active");

    return {className:Array.from(allClassNames).join(' ')}
  }
}


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
export {Header, NavLink}