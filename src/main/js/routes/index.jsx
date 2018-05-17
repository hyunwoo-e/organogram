import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from 'components/Login';

function routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" from="/" />
    </Switch>
  );
}

export default routes;
