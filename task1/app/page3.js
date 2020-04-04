import React, {Component, Fragment} from "react";
import {render} from "react-dom";

class Page extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="container">
            <div className="header-item brand">HEADER</div>
            <a className="header-item" href="index.html">страница1</a>
            <a className="header-item" href="page2.html">страница2</a>
            <a className="header-item" href="page3.html">страница3</a>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <h1>CONTENT</h1>
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