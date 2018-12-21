import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import config from './firebase-config';
import App from './app';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/workbox-sw.js');
  });
}

firebase.initializeApp(config);
