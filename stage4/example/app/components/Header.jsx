import {Link} from "@reach/router";
import React from 'react';

const Header = props => (
  <header className="header">
    <div className="container header-logo fs-32">Кино справочник</div>
    <nav className="container">
      <Link className="header-link" to="/">В начало</Link>
      <Link className="header-link" to="/movies">Лучшее</Link>
      <Link className="header-link" to="/responsive">Responsive</Link>
    </nav>
  </header>
);

export {Header}