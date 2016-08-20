const initialState = {
	num: 0
};

export default function numReducer(state = initialState, action) {
	let newState;

	switch( action.type ) {
		case 'INCREMENT':
			newState = Object.assign({}, state, {
				num: state.num + 1
			});
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}