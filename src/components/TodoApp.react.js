import React from 'react';
import TodoStore from '../stores/TodoStore';
import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';

function getTodoState() {
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	};
}

const TodoApp = React.createClass({
	getInitialState: () => {
		return getTodoState();
	},
	componentDidMount: function() {
		TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		TodoStore.removeChangeListener(this._onChange);
	},
	render: function() {
		return (
			<div>
				<Header/>
				<MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete}/>
				<Footer allTodos={this.state.allTodos}/>
			</div>
		);
	},
	_onChange: function() {
		this.setState(getTodoState());
	}
});

module.exports = TodoApp;