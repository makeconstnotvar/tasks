import React, {Component, Fragment} from "react";

class ViewMap extends Component {
  constructor(props) {
    super(props);

  }

  yaMap = null;

  componentDidMount() {
    window.ymaps.ready(() => {
      this.yaMap = new window.ymaps.Map("map", {
        center: countries[0].capital.latlng,
        zoom: 11
      });
      this.update(countries[0])
    });
  }

  render() {
    return <div id="map"/>
  }
}

export {ViewMap}