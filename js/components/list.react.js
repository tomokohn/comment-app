import React from 'react';
import Store from '../store.redux.js';
import md5 from '../md5.min'

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
							<img src={`http://www.gravatar.com/avatar/${md5(comment.email.toLowerCase())}`}/>
							<h2>{comment.email}</h2>
							<p>{comment.massage}</p>
						</li>)}
				</ul>
		);
	}
}

export default List;
