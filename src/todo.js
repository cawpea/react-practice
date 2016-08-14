import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './components/TodoApp.react';

(function() {
	console.log('start todo app...');
	ReactDom.render(
		<TodoApp/>,
		document.getElementById('todoapp')
	);
}());