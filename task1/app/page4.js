import React, {Component, Fragment} from "react";
import {render} from "react-dom";

let workers = [
  {name: "Василий", age: 30, position: "сантехник", gender: "man"},
  {name: "Богдан", age: 54, position: "сторож", gender: "man"},
  {name: "Наташа", age: 24, position: "курьер", gender: "woman"},
  {name: "Ира", age: 35, position: "продавец", gender: "woman"},
  {name: "Семён", age: 41, position: "безработный", gender: "man"},
  {name: "Марина", age: 40, position: "бухгалтер", gender: "woman"},
  {name: "Анатолий", age: 50, position: "тестировщик", gender: "man"}
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
            <p>Немного более творческое решение</p>
            <div className="workers">
              {
                workers.map((w, i) => <Worker key={i} worker={w}/>)
              }
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

const Worker = props => (
  <div className={`worker`}>
    <div className="foto">
      <img src={`img/${props.worker.gender}.png`} alt=""/>
    </div>
    <div className="info">
      <div className="name">{props.worker.name} {props.worker.age} лет</div>
      <div>Должность: {props.worker.position}</div>
    </div>
  </div>
)

render(<Page/>, document.querySelector("#root"));