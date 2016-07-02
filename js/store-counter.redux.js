import {createStore, combineReducers, applyMiddleware} from 'redux';
import counter from './reducers/counter.redux.js';
import delay from './middleware/delay.redux.js';

const reducer = combineReducers({
	counter
});

const store = createStore(reducer, applyMiddleware(delay));

export default store;