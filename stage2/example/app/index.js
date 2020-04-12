import React from "react";
import {render} from "react-dom";

import {MainLayout} from "layouts/MainLayout";
import {MainPage} from "pages/MainPage";
import {CounterPage} from "pages/CounterPage";
import {UsersPage} from "pages/UsersPage";
import {Router} from "@reach/router";

const App = props => {
  return (
    <MainLayout>
      <Router>
        <MainPage path="/"/>
        <CounterPage path="/counter"/>
        <UsersPage path="/users"/>
      </Router>
    </MainLayout>
  )
}

render(<App/>, document.querySelector("#root"));