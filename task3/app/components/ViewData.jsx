import React from "react";

const ViewData = props => (
  <div className="view-data">
    <div className="view-data-grid">
      <div>
        <div>
          <div className="view-data-title">Код страны</div>
          <div className="view-data-value">{props.code}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Основной домен</div>
          <div className="view-data-value">{props.domains.join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Население</div>
          <div className="view-data-value">{props.population}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Территория</div>
          <div className="view-data-value">{props.area}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Язык</div>
          <div className="view-data-value">{props.languages}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Валюта</div>
          <div className="view-data-value">{props.currencies.map(c => c.name).join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Телефонный код</div>
          <div className="view-data-value">{props.phones.join(', ')}</div>
        </div>
        <i className="view-data-icon fa fa-times"/>
      </div>
      <div>
        <div>
          <div className="view-data-title">Регион</div>
          <div className="view-data-value">{props.subregion}</div>
        </div>
        <i className="view-data-icon fa fa-times"/></div>
    </div>
    <div className="view-data-flag">
      <img src={props.flag} alt=""/>
    </div>
  </div>
);

export {ViewData}