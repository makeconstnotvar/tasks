import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../countries";

class ViewMap extends Component {
  yaMap = null;

  componentDidMount() {
    let {center, zoom} = this.props;
    window.ymaps.ready(() => {
      this.yaMap = new window.ymaps.Map("map", {center, zoom});
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      let {center, zoom} = this.props;
      this.yaMap.setCenter(center, zoom);
      console.log('map update');
    }
  }

  render() {
    return <div id="map"/>
  }
}

ViewMap.defaultProps = {
  center: [55.7522, 37.6156],
  zoom: 11
};

ViewMap.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number
};

export {ViewMap}