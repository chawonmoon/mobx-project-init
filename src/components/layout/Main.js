import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import NotFound from './NotFound';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default Main;
