import {createStore, combineReducers} from 'redux';
import counter from './reducers/counter.redux.js';

const reducer = combineReducers({
	counter
});

const store = createStore(reducer);

export default store;