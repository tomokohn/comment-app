import React from 'react';


const Counter = (props) => {
	return (
		<div>
			<h1>{props.counter}</h1>
			<button onClick={props.increment}>+</button>
			<button onClick={props.decrement}>-</button>
		</div>
    );
};


export default Counter;
