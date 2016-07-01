import {createStore} from 'redux';
import counter from '../reducers/counter.redux.js';


const store = createStore(counter);


export default store;