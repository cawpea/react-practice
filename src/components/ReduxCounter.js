import React from 'react';

export default class ReduxCounter extends React.Component {
	render() {
		return (
			<div>
				<span>{this.props.num}</span>
				<button onClick={ this.props.handleClick }>Increment</button>
			</div>
		);
	}
}