import React, {PropTypes} from 'react';

const ENTER_KEY_CODE = 13;

const TodoTextInput = React.createClass({
	propTypes: {
		className: PropTypes.string,
		id: PropTypes.string,
		placeholder: PropTypes.string,
		onSave: PropTypes.func.isRequired,
		value: PropTypes.string
	},
	getInitialState: function() {
		return {
			value: this.props.value || ''
		};
	},
	render: function() {
		return (
			<input
			 className={this.props.className}
			 id={this.props.id}
			 placeholder={this.props.placeholder}
			 onBlur={this._save}
			 onChange={this._onChange}
			 onKeyDown={this._onKeyDown}
			 value={this.state.value}
			 autoFocus={true}
			/>
		);
	},
	_save: function() {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	},
	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	_onKeyDown: function(event) {
		if( event.keyCode === ENTER_KEY_CODE ) {
			this._save();
		}
	}
});

module.exports = TodoTextInput;
