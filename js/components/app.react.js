import React from 'react';
import Counter from './counter.react.js';
import {increment, decrement} from '../action-creators/action-creators.redux.js';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment() {
			dispatch(increment());
		},
		decrement() {
			dispatch(decrement());
		}
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Counter
					counter={this.props.counter}
					increment={this.props.increment}
					decrement={this.props.decrement} />
			</div>
	    );
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
