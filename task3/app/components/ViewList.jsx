import React, {Component, Fragment} from "react";


const ViewList = props => {
  return (
    <div className="countries">{
      props.countries.map(c => (
        <div key={c.code} className="countries-item" onClick={e => props.select(c)}><span className="country">{c.name}</span> <span className="capital">{c.capital.name}</span></div>
      ))
    }</div>
  )
};

export {ViewList}