import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './global-styles.scss';
import Routes from './routes';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
