import React from "react";
import {render} from "react-dom";

import {Layout} from "layouts/Layout";
import {MainPage} from "pages/MainPage";
import {CounterPage} from "pages/CounterPage";
import {UsersPage} from "pages/UsersPage";
import {Router} from "@reach/router";

const App = props => {
  return (
    <Layout>
      <Router>
        <MainPage path="/"/>
        <CounterPage path="/counter"/>
        <UsersPage path="/users"/>
      </Router>
    </Layout>
  )
}

render(<App/>, document.querySelector("#root"));