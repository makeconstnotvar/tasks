import React, {Component} from "react";


class CounterPage extends Component {
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
      <div className="container">
        <h1>Счетчик: {count}</h1>
        {
          count > this.limit &&
          <div>Счетчик больше {this.limit}! <button onClick={this.reset}>Сборосить</button></div>
        }
      </div>
    )
  }
}

export {CounterPage}