import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './scenes/app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import './assets/fonts/material-icons/material-icons.css';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/Montserrat/css/montserrat-webfont.min.css';
import './assets/fonts/roboto/roboto.css';
import './assets/fonts/montserrat-extrabold/style.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
