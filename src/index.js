import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/workbox-sw.js');
  });
}
