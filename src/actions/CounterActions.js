const ACTION_TYPE = {
	INCREMENT: 'INCREMENT'
};

let actionCreator = {
	increment: () => {
		return {
			type: ACTION_TYPE.INCREMENT
		}
	}
}

export default actionCreator;