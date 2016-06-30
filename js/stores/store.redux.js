import {createStore, combineReducers} from 'redux';
import counter from '../reducers/counter.redux.js';


const initialState = {
	counter: -1
};

const reducers = combineReducers({
	counter
});

const store = createStore(reducers, initialState);


export default store;
