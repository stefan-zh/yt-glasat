import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import * as moment from 'moment';
import 'moment/locale/bg';

// използвай български
moment.locale("bg");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
