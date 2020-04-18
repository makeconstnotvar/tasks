import {Fragment} from "react";
import React from 'react';
import {Header} from "components/Header";
import {Footer} from "components/Footer";

const Layout = props => (
  <Fragment>
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </Fragment>
);

export {Layout}