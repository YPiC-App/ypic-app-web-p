import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '/pages/sign-in';

import { home, signIn } from './urls';
// const SignIn = lazy(() => import('/pages/sign-in/index.js'));

const Home = lazy(() => import('/pages/home/index'));

const Routes = () => (
  <Switch>
    {/* <Route exact path={home()} component={Home} /> */}
    <Route exact path={home()} component={SignIn} />
  </Switch>
);

export default Routes;
