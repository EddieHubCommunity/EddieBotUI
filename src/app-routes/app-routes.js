/* eslint-disable no-undef */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NotFound from '../not-found/not-found';
import ComingSoon from '../coming-soon/coming-soon';

const AppRoutes = () => (
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
);

export default AppRoutes;
