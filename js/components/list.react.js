import React from 'react';
import Store from '../store.redux.js';

class List extends React.Component {
	constructor() {
		super();
		this.state = {id:0} ;
	}

	changeState() {
		let {comments} = Store.getState();

		this.setState({comments});
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
				<ul>
					{this.state.comments.map(comment =>
						<li key={comment.id}>
							<h2>{comment.email}</h2>
							<p>{comment.massage}</p>
						</li>)}
				</ul>
		);
	}
}

export default List;
