import React from "react";
import {render} from "react-dom";
import {Router} from "@reach/router";
import {Layout} from "layouts/Layout";
import {MoviesPage} from "pages/MoviesPage";
import {DetailsPage} from "pages/DetailsPage";
import moment from "moment";
import {RequestPage} from "./pages/RequestPage";

moment.locale("ru");

const App = props => {
  return (
    <Layout>
      <Router>
        <MoviesPage path="/"/>
        <DetailsPage path="/movie/:id"/>
        <RequestPage path="/request"/>
      </Router>
    </Layout>
  )
}

render(<App/>, document.querySelector("#root"));