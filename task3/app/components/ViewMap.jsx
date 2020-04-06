import React, {Component, Fragment} from "react";

class ViewMap extends Component {
  yaMap = null;

  componentDidMount() {
    let {center, scale} = this.props;
    window.ymaps.ready(() => {
      this.yaMap = new window.ymaps.Map("map", {center, scale});
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      let {center, scale} = this.props;
      this.yaMap.setCenter(center, scale);
      console.log('map update');
    }
  }

  render() {
    return <div id="map"/>
  }
}

export {ViewMap}