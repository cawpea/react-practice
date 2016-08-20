import React from 'react';
import {connect} from 'react-redux';
import Counter from './ReduxCounter';
import CounterActions from '../actions/CounterActions';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch( CounterActions.increment() );
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);