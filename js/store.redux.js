import {createStore, combineReducers, applyMiddleware} from 'redux';
import comments from './reducers/comments.redux';
import delay from './middleware/delay.redux.js';

const reducer = combineReducers({
	comments
});

const store = createStore(reducer, applyMiddleware(delay));

export default store;