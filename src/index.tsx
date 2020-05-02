import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './client/App';

import './styles/fonts/fonts.css';
import './styles/reset.css';
import './styles/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
