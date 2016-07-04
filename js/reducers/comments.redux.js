const comments = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state, {
					id: action.id,
					email: action.email,
					massage: action.massage,
					visible: true
				}
			]
		case 'FILTER':

			let newArr = state.map(comment => {
					if (comment.email.indexOf(action.filter) > -1 || comment.massage.indexOf(action.filter) > -1) {
						comment.visible = true;
						return comment;
					} else {
						comment.visible = false;
						return comment;
		}
				});
			console.log(newArr);
			return newArr;
			/*let newArr = state.filter( comment => comment.email.indexOf(action.filter) > -1 || comment.massage.indexOf(action.filter) > -1);
			console.log(newArr, action.filter);
			return newArr;*/
		default: 
			return state;
	}
};

export default comments;