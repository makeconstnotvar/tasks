import {Fragment} from "react";
import React from 'react';
import {Header} from "components/Header";

const Layout = props => (
  <Fragment>
    <Header/>
    <main>
      {props.children}
    </main>
  </Fragment>
);

export {Layout}