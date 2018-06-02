import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import AppStore, { AppSaga, sagaMiddleware } from './store';

sagaMiddleware.run(AppSaga());
ReactDOM.render(<App store={AppStore}/>, document.getElementById('root'));
registerServiceWorker();

