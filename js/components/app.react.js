import React from 'react';
import Store from '../stores/store.redux.js';


class App extends React.Component {
	constructor() {
		super()
	}

	changeState(state) {
		this.setState({counter: state});
	}

	componentWillMount() {
		const state = Store.getState();

		this.changeState(state);
	}

	componentDidMount() {
		this.unsubscribe = Store.subscribe(() => {
			const state = Store.getState();

			this.changeState(state);
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={() => Store.dispatch({type: 'INCREMENT'})}>+</button>
				<button onClick={() => Store.dispatch({type: 'DECREMENT'})}>-</button>
			</div>
		);
	}
}


export default App;
