import React, {Component} from "react";
import {render} from "react-dom";
import {countries} from "./countries";
import {ViewList} from "./components/ViewList";
import {ViewData} from "./components/ViewData";
import {ViewMap} from "./components/ViewMap";
import first from 'lodash/first'

class Page extends Component {
  constructor(props) {
    super(props);
    let c = first(countries) || {};
    this.state = this.getStateObj(c)
  }

  getMapData = (country) => {
    let center, zoom;
    if (country.capital.latlng && country.capital.latlng.length)
      [center, zoom] = [country.capital.latlng, 11];
    else
      [center, zoom] = [country.latlng, 6];
    return [center, zoom]
  };

  onSelect = (country)=>{
    let newState = this.getStateObj(country);
    this.setState(newState)
  };

  getStateObj = (country) => {
    let [center, zoom] = this.getMapData(country);
    return {
      viewData: {
        code: country.code,
        domains: country.topLevelDomain,
        population: country.population,
        area: country.area,
        languages: country.languages,
        currencies: country.currencies,
        phones: country.callingCodes,
        subregion: country.subregion,
        flag: country.flag,
      },
      mapData: {
        center,
        zoom
      }
    }
  };

  render() {
    const {viewData, mapData} = this.state;
    return (
      <div className="content">
        <div className="container ">
          <div className="jumbo">
            <h1>Справочник по географии</h1>
            <p>Полезная информация о странах</p>
          </div>
          <div className="view">
            <ViewData {...viewData}/>
            <ViewList countries={countries} onSelect={this.onSelect}/>
            <ViewMap {...mapData} />
          </div>
        </div>
      </div>
    )
  }
}

render(<Page/>, document.querySelector("#root"));