import React, {Component, Fragment} from "react";
import {render} from "react-dom";

class Page extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="container">
            <div className="header-item brand">HEADER</div>
            <a className="header-item" href="index.html">Cтраница 1</a>
            <a className="header-item" href="page2.html">Cтраница 2</a>
            <a className="header-item" href="page3.html">Cтраница 3</a>
            <a className="header-item" href="page4.html">Cтраница 4</a>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <h1>CONTENT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div style={{marginBottom:"20px"}}>
              <a href="https://ru.lipsum.com/" target="_blank">lipsum.com</a>
            </div>
            <div>
              <a href="https://ru.reactjs.org/" target="_blank"><img src="img/react.png" alt="Русская документаци по React.js"/></a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div>FOOTER</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

render(<Page/>, document.querySelector("#root"));