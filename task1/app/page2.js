import React, {Component, Fragment} from "react";
import {render} from "react-dom";

class Page extends Component {
  timer = null;
  limit = 5;

  state = {
    count: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000);
  }

  reset = () => {
    this.setState({count: 0})
  };

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    let {count} = this.state;
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
            <p>Счетчик: {count}</p>
            {
              count > this.limit &&
              <div>Счетчик больше {this.limit}! <button onClick={this.reset}>Сборосить</button></div>
            }
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