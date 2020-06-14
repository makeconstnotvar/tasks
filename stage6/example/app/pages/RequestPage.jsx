import React, {Component} from 'react'
import {moviesApi} from "../api/moviesApi";

class RequestPage extends Component {
  async componentDidMount() {
    let result = await moviesApi.getTestRequest();
    console.log(result);
    console.log('end');
  }

  render() {
    return (
      <div className="container">

      </div>
    )
  }
}

export {RequestPage}