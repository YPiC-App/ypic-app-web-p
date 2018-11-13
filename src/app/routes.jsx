import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// eslint-disable-next-line
import Home from '/pages/home';

import { home } from './urls';

const Routes = () => (
  <Fragment>
    <Route exact path={home()} component={Home} />
  </Fragment>
);

export default Routes;
