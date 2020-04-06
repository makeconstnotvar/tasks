import React, {Component, Fragment} from "react";
import {render} from "react-dom";
import {countries} from "./countries";
import {ViewList} from "./components/ViewList";
import {ViewData} from "./components/ViewData";
import {ViewMap} from "./components/ViewMap";

class Page extends Component {

  state = {
    code: "",
    domains: [],
    population: "",
    area: "",
    languages: [],
    currencies: [],
    phones: [],
    subregion: "",
    flag: "",

  };

  select = (country) => {
    this.update(country);
    let coodrinates, scale;
    if (country.capital.latlng && country.capital.latlng.length)
      [coodrinates, scale] = [country.capital.latlng, 11];
    else
      [coodrinates, scale] = [country.latlng, 6];

    this.yaMap.setCenter(coodrinates, scale);
  };

  update = (country) => {
    this.setState({
      code: country.code,
      domains: country.topLevelDomain,
      population: country.population,
      area: country.area,
      languages: country.languages,
      currencies: country.currencies,
      phones: country.callingCodes,
      subregion: country.subregion,
      flag: country.flag,
    });
  };

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
    return (
      <div className="content">
        <div className="container ">
          <div className="jumbo">
            <h1>Справочник по географии</h1>
            <p>Полезная информация о странах</p>
          </div>
          <div className="view">
            <ViewData {...this.state}/>
            <ViewList countries={countries} select={this.select}/>
            <ViewMap/>
          </div>
        </div>
      </div>
    )
  }
}

render(<Page/>, document.querySelector("#root"));