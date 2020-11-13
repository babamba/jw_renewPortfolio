import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

export default (
  <Switch>
    <Route path="/about" />
    <Route path="/portfolio" exact={true} />
    <Route path="/portfolio/:id" exact={true} />
    <Route path="/resume" exact={true} />
    <Route path="/blog" exact={true} />
    <Route path="/blog/:id" exact={true} />
    <Route path="/contact" exact={true} />

    <Redirect path="/" to="/about" />
  </Switch>
);
