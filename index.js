import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './js/components/app.react.js';
import Store from './js/stores/store.redux.js';


ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
