import React from "react";
import {render} from "react-dom";
import {Router} from "@reach/router";
import {Layout} from "layouts/Layout";
import {MainPage} from "pages/MainPage";
import {CounterPage} from "pages/CounterPage";
import {UsersPage} from "pages/UsersPage";
import {UsersPageAlt} from "./pages/UsersPageAlt";

const App = props => {
  return (
    <Layout>
      <Router>
        <MainPage path="/"/>
        <CounterPage path="/counter"/>
        <UsersPage path="/users"/>
        <UsersPageAlt path="/users-alt"/>
      </Router>
    </Layout>
  )
}

render(<App/>, document.querySelector("#root"));