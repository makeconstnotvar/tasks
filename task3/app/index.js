import React, {Component, Fragment} from "react";
import {render} from "react-dom";
import {countries} from "./countries";

class Page extends Component {
  yaMap = null;
  state = {
    code: "",
    domain: "",
    population: "",
    area: "",
    languages: "",
    currency: "",
    phone: "",
    subregion: "",
    flag: "",

  };

  select = (country) => {
    this.update(country);
    this.yaMap.setCenter(country.capital.latlng, 11);
  };

  update = (country) => {
    this.setState({
      code: country.code,
      domain: country.topLevelDomain[0],
      population: country.population,
      area: country.area,
      languages: country.languages,
      currency: country.currencies[0],
      phone: country.callingCodes[0],
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
            <div className="view-data">
              <div className="view-data-grid">
                <div>{this.state.code}</div>
                <div>{this.state.domain}</div>
                <div>{this.state.population}</div>
                <div>{this.state.area}</div>
                <div>{this.state.languages}</div>
                <div>{this.state.currency.name}</div>
                <div>{this.state.phone}</div>
                <div>{this.state.subregion}</div>
              </div>
              <div className="view-data-flag">
                <img src={this.state.flag} alt=""/>
              </div>
            </div>
            <div className="countries">{
              countries.map(c => (
                <div key={c.code} className="countries-item" onClick={e => this.select(c)}><span className="country">{c.name}</span> <span className="capital">{c.capital.name}</span></div>
              ))
            }</div>
            <div id="map"/>
          </div>
        </div>
      </div>
    )
  }
}

render(<Page/>, document.querySelector("#root"));