import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import reducers from '.';

const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools(middlewares));

if (module.hot) {
  module.hot.accept('./index', () => {
    import('./index').then(next => {
      store.replaceReducer(next);
    });
  });
}

export default store;
