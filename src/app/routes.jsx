import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { home, signIn } from './urls';

const Home = lazy(() => import('/pages/home/index'));
const SignIn = lazy(() => import('/pages/sign-in/index'));

const Routes = () => (
  <Switch>
    {/* <Route exact path={home()} component={Home} /> */}
    <Route exact path={home()} component={SignIn} />
  </Switch>
);

export default Routes;
