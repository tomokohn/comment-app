import React from 'react';
import Store from '../store.redux.js';

class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			id:0,
			emailInput: '',
			massageInput: ''
			} ;
		this.restForm = this.restForm.bind(this);
	}
	restForm(){
		console.log('11');
	}


	render() {
		return (
			<div className='input'>
				<input type="email" placeholder="Email"  ref={node => {
				this.state.emailInput = node;}
				}/>
				<textarea placeholder="Massage" ref={node => {
				this.state.massageInput = node;}
				}/>
				<button onClick={() => {Store.dispatch({
					type: 'ADD_COMMENT',
					id: this.state.id++,
					email: this.state.emailInput.value,
					massage: this.state.massageInput.value
				});
				this.restForm}}>+</button>
			</div>
		);
	}
}

export default Input;

//<ul>
//	{this.state.comments.map(comment =>
//		<li key={comment.id}>
//			<h2>{comment.email}</h2>
//			<p>{comment.massage}</p>
//		</li>)}
//</ul>
