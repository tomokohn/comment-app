import React from 'react';
import Store from '../stores/store.redux.js';
import {increment, decrement} from '../action-creators/action-creators.redux.js';

class App extends React.Component {
	constructor() {
		super();
	}

	changeState() {
		let {counter} = Store.getState();

		this.setState({counter});
	}

	componentWillMount() {
		this.changeState();

		this.unsubscribe = Store.subscribe(() => {
			this.changeState();
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={() => Store.dispatch(increment())}>+</button>
				<button onClick={() => Store.dispatch(decrement())}>-</button>
			</div>
		);
	}
}

export default App;
