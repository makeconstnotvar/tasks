import React from "react";
import {PropTypes} from "prop-types";
import {numFormat} from "../numFormat";

const ViewData = props => (
  <div className="view-data">
    <div className="view-data-grid">
      <div>
        <div>
          <div className="view-data-title">Код страны</div>
          <div className="view-data-value">{props.code}</div>
        </div>
        <i className="view-data-icon fa fa-book"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Основной домен</div>
          <div className="view-data-value">{props.domains.join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-laptop"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Население</div>
          <div className="view-data-value">{numFormat(props.population)}</div>
        </div>
        <i className="view-data-icon fa fa-users"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Территория</div>
          <div className="view-data-value">{numFormat(props.area)}</div>
        </div>
        <i className="view-data-icon fa fa-globe"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Язык</div>
          <div className="view-data-value">{props.languages}</div>
        </div>
        <i className="view-data-icon fa fa-language"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Валюта</div>
          <div className="view-data-value">{props.currencies.map(c => c.name).join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-money"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Телефонный код</div>
          <div className="view-data-value">{props.phones.join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-phone-square"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Регион</div>
          <div className="view-data-value">{props.subregion}</div>
        </div>
        <i className="view-data-icon fa fa-university"/></div>
    </div>
    <div className="view-data-flag">
      <img src={props.flag} alt=""/>
    </div>
  </div>
);

ViewData.defaultProps = {
  code: "",
  domains: [],
  population: "",
  area: "",
  languages: [],
  currencies: [],
  phones: [],
  subregion: "",
  flag: ""
};

ViewData.propTypes = {
  code: PropTypes.string,
  domains: PropTypes.array,
  population: PropTypes.number,
  area: PropTypes.number,
  languages: PropTypes.string,
  currencies: PropTypes.array,
  phones: PropTypes.array,
  subregion: PropTypes.string,
  flag: PropTypes.string
};

export {ViewData}