import React from 'react';
import Store from '../store.redux.js';
import List  from './list.react';
import Input  from './input.react';

class App extends React.Component {
	constructor() {
		super();
	}


	render() {
		return (
			<div>
				<Input />
				<List />
			</div>
		);
	}
}

export default App;

//<ul>
//	{this.state.comments.map(comment =>
//		<li key={comment.id}>
//			<h2>{comment.email}</h2>
//			<p>{comment.massage}</p>
//		</li>)}
//</ul>
