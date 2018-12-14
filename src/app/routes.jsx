import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { home, page2 } from './urls';

const Home = lazy(() => import('/pages/home/index'));
const Page2 = lazy(() => import('/pages/page2/index'));

const Routes = () => (
  <Switch>
    <Route exact path={home()} component={Home} />
    <Route exact path={page2()} component={Page2} />
  </Switch>
);

export default Routes;
