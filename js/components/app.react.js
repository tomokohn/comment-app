import React from 'react';
import Store from '../stores/store.redux.js';


class App extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.setState({counter: Store.getState()});
	}

	componentDidMount() {
		this.unsubscribe = Store.subscribe(() => {
			this.setState({counter: Store.getState()});
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
