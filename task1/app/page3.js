import React, {Component, Fragment} from "react";
import {render} from "react-dom";

let workers = [
  {name: "Василий", age: 30},
  {name: "Богдан", age: 54},
  {name: "Наташа", age: 24},
  {name: "Ира", age: 35},
  {name: "Семён", age: 41},
  {name: "Марина", age: 40},
  {name: "Анатолий", age: 50}
];

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
            <ul>
              {
                workers.map((w, i) => <li key={i}>{w.name} ({w.age} лет)</li>)
              }
            </ul>
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