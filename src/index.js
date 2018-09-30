import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

//const store = createStore(search, applyMiddleware(logger));
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
//registerServiceWorker();
