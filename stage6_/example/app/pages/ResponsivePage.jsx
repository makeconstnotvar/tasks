import {Component} from "react";
import React from 'react';

class ResponsivePage extends Component {
  el = null;

  componentDidMount() {
    this.el = document.getElementById("width");
    this.el.innerText = window.innerWidth;
    window.addEventListener('resize', this.onWindowResize);
  }

  onWindowResize = e => {
    this.el.innerText = e.currentTarget.innerWidth
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  render() {
    return [
      <div className="header" key={1}>
        <div className="container">
          <h1>Адаптивный CSS</h1>
        </div>
      </div>,
      <div key={2} className="container">
        <div className="page-width">Ширина страницы: <span id="width"/>px</div>
        <table className="media-box">
          <tbody>
          <tr>
            <td className="media-row desktop">
              <div className="media-size">1440px 1280px</div>
              <div className="media-title">Desktop</div>
              <div className="media-size">1001px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row tablet">
              <div className="media-size">1000px</div>
              <div className="media-title">Tablet</div>
              <div className="media-size">751px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row mobile">
              <div className="media-size">750px</div>
              <div className="media-title">Mobile</div>
              <div className="media-size">551px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row micro">
              <div className="media-size">500px</div>
              <div className="media-title">Micro</div>
              <div className="media-size">0px</div>
            </td>
          </tr>
          </tbody>
        </table>

        <h3 className="demo-title">.SHOW-xxx</h3>
        <div className="demo-desc">Видно при ширине = xxx</div>
        <div className="demo-box">
          <div className="show-desktop">show-desktop</div>
          <div className="show-tablet">show-tablet</div>
          <div className="show-mobile">show-mobile</div>
          <div className="show-micro">show-micro</div>
        </div>

        <h3 className="demo-title">.HIDE-xxx</h3>
        <div className="demo-desc">Скрыто при ширине = xxx</div>
        <div className="demo-box">
          <div className="hide-desktop">hide-desktop</div>
          <div className="hide-tablet">hide-tablet</div>
          <div className="hide-mobile">hide-mobile</div>
          <div className="hide-micro">hide-micro</div>
        </div>

        <h3 className="demo-title">.SHOW-xxx-UP</h3>
        <div className="demo-desc">Видно при ширине &ge; xxx</div>
        <div className="demo-box">
          <div className="show-desktop">show-desktop-up (<span className="pointer dashed" title="Шире не бывает, нужно использовать класс .show-desktop">.show-desktop</span>)</div>
          <div className="show-tablet-up">show-tablet-up</div>
          <div className="show-mobile-up">show-mobile-up</div>
          <div className="show">show-micro-up (<span className="pointer dashed" title="Всегда видно">.show</span>)</div>
        </div>

        <h3 className="demo-title">.SHOW-xxx-DOWN</h3>
        <div className="demo-desc">Скрыто при ширине &le; xxx</div>
        <div className="demo-box">
          <div className="show">show-desktop-down (<span className="pointer dashed" title="Всегда видно">.show</span>)</div>
          <div className="show-tablet-down">show-tablet-down</div>
          <div className="show-mobile-down">show-mobile-down</div>
          <div className="show-micro">show-micro-down (<span className="pointer dashed" title="Меньше не бывает, нужно использовать класс .show-micro">.show-micro</span>)</div>
        </div>

        <h3 className="demo-title">.HIDE-xxx-UP</h3>
        <div className="demo-desc">Скрыто при ширине &ge; ххх</div>
        <div className="demo-box">
          <div className="hide-desktop">hide-desktop-up (<span className="pointer dashed" title="Шире не бывает, нужно использовать класс .hide-desktop">.hide-desktop</span>)</div>
          <div className="hide-tablet-up">hide-tablet-up</div>
          <div className="hide-mobile-up">hide-mobile-up</div>
          <div className="hide">hide-micro-up (<span className="pointer dashed" title="Никогда не видно, нужно использовать класс .hide">.hide</span>)</div>
        </div>

        <h3 className="demo-title">.HIDE-xxx-DOWN</h3>
        <div className="demo-desc">Скрыто при ширине &le; ххх</div>
        <div className="demo-box">
          <div className="hide">hide-desktop-down (<span className="pointer dashed" title="Никогда не видно, нужно использовать класс .hide">.hide</span>)</div>
          <div className="hide-tablet-down">hide-tablet-down</div>
          <div className="hide-mobile-down">hide-mobile-down</div>
          <div className="hide-micro">hide-micro-down (<span className="pointer dashed" title="Меньше не бывает, нужно использовать класс .hide-micro">.hide-micro</span>)</div>
        </div>
      </div>
    ];
  }
}

export {ResponsivePage}