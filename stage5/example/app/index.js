import React from "react";
import {render} from "react-dom";
import {Router} from "@reach/router";
import {Layout} from "layouts/Layout";
import {MoviesPage} from "pages/MoviesPage";
import {DetailsPage} from "pages/DetailsPage";
import moment from "moment";

moment.locale("ru");

const App = props => {
  return (
    <Layout>
      <Router>
        <MoviesPage path="/"/>
        <DetailsPage path="/movie/:id"/>
      </Router>
    </Layout>
  )
}

render(<App/>, document.querySelector("#root"));