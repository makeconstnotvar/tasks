import React from "react";
import {PropTypes} from 'prop-types';

const ViewList = props => {
  return (
    <div className="countries">{
      props.countries.map(c => (
        <div key={c.code} className="countries-item" onClick={e => props.onSelect(c)}><span className="country">{c.name}</span> <span className="capital">{c.capital.name}</span></div>
      ))
    }</div>
  )
};

ViewList.defaultProps = {
  onSelect(country) {
    console.log('ViewList onSelect not implemented, country:', country)
  }
};

ViewList.propTypes = {
  onSelect: PropTypes.func
};

export {ViewList}