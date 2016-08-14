import React, {PropTypes} from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem.react';

var MainSection = React.createClass({
	propTypes: {
		allTodos: PropTypes.object.isRequired,
		areAllComplete: PropTypes.bool.isRequired
	},
	render: function() {
		if( Object.keys(this.props.allTodos).length < 1 ) {
			return null;
		}
		var allTodos = this.props.allTodos;
		var todos = [];

		for( var key in allTodos ) {
			todos.push(<TodoItem key={key} todo={allTodos[key]}/>);
		}

		return (
			<section id="main">
				<input
					id="toggle-all"
					type="checkbox"
					onChange={this._onToggleCompleteAll}
					checked={this.props.areAllComplete ? 'checked': ''}
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todo-list">
					{todos}
				</ul>
			</section>
		);
	},
	_onToggleCompleteAll: function() {
		TodoActions.toggleCompleteAll();
	}
});

module.exports = MainSection;