import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '/reducers/store';

import './global-styles.scss';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  </Provider>
);

export default App;
