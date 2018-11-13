import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '/pages/home/index';

import { home } from './urls';

const Routes = () => (
  <Fragment>
    <Route exact path={home()} component={Home} />
  </Fragment>
);

export default Routes;
