import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/Counter.js';
import Avatar from './components/Avatar.js';
import ChildAvatar from './components/ChildAvatar.js';
import CommentBox from './components/CommentBox.js';

var app;
window.App = {
	render: () => {
		app = ReactDom.render(
			<CommentBox url="/data/comments.json" pollInterval={2000}/>,
			document.getElementById('root')
		);
	}
};

(function() {
	App.render();
}());