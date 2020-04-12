import React, {Fragment} from "react";
import {Header} from "components/Header";
import {Footer} from "components/Footer";

const MainLayout = props => {
  return (
    <Fragment>
      <Header/>
      {props.children}
      <Footer/>
    </Fragment>
  )
}
export {MainLayout}