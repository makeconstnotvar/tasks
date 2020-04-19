import {Link} from "@reach/router";
import React from 'react';

const Header = props => (
  <header className="header">
    <div className="container">
      <Link className="header-logo" to="/">Кино справочник</Link>
    </div>
  </header>
);

export {Header}