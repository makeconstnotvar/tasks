import React from "react";
import {render} from "react-dom";
import {Router} from "@reach/router";
import {Layout} from "layouts/Layout";
import {MainPage} from "pages/MainPage";
import {MoviesTopPage} from "./pages/MoviesTopPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

const App = props => {
  return (
    <Layout>
      <Router>
        <MainPage path="/"/>
        <MoviesTopPage path="/movies"/>
        <MovieDetailsPage path="/movie/:id"/>
      </Router>
    </Layout>
  )
}

render(<App/>, document.querySelector("#root"));