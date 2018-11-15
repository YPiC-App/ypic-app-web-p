import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '/pages/home/index';
import Page2 from '/pages/page2/index';

import { home, page2 } from './urls';

const Routes = () => (
  <Fragment>
    <Route exact path={home()} component={Home} />
    <Route exact path={page2()} component={Page2} />
  </Fragment>
);

export default Routes;
