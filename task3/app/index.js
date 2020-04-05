import React, {Component, Fragment} from "react";
import {render} from "react-dom";
import {countries} from "./countries";

class Page extends Component {
  yaMap = null;
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
            <div className="view-data">
              <div className="view-data-grid">
                <div>
                  <div>
                    <div className="view-data-title">Код страны</div>
                    <div className="view-data-value">{this.state.code}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Основной домен</div>
                    <div className="view-data-value">{this.state.domains.join(', ')}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Население</div>
                    <div className="view-data-value">{this.state.population}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Территория</div>
                    <div className="view-data-value">{this.state.area}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Язык</div>
                    <div className="view-data-value">{this.state.languages}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Валюта</div>
                    <div className="view-data-value">{this.state.currencies.map(c => c.name).join(', ')}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Телефонный код</div>
                    <div className="view-data-value">{this.state.phones.join(', ')}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/>
                </div>
                <div>
                  <div>
                    <div className="view-data-title">Регион</div>
                    <div className="view-data-value">{this.state.subregion}</div>
                  </div>
                  <i className="view-data-icon fa fa-times"/></div>
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