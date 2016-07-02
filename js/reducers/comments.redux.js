const comments = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state, {
					id: action.id,
					email: action.email,
					massage: action.massage
				}
			];

		default: 
			return state;
	}
};

export default comments;