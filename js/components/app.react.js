import React from 'react';
import Store from '../store.redux.js';
import List  from './list.react';
import Filter  from './input.react.js';
import Input  from './filter.react.js';


class App extends React.Component {
	constructor() {
		super();
	}


	render() {
		return (
			<div>
				<Filter />
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
