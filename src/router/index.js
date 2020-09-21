/* eslint-disable no-undef */

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NotFound from '../feature-notfound/notfound';
import ComingSoon from '../feature-comingsoon/comingsoon';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        { process.env.REACT_APP_COMING_SOON === "true" ? <Redirect to="/coming-soon" /> : <h1>Home Page</h1> }
      </Route>
      <Route exact path="/coming-soon">
        <ComingSoon />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;