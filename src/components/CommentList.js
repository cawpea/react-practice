import React, {Component} from 'react';
import Comment from './Comment.js';

export default class CommentList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var commentNodes = this.props.data.map((comment) => {
			return (<Comment key={comment.id} author={comment.author}>{comment.text}</Comment>);
		});

		return (
			<div className='commentList'>
				{commentNodes}
			</div>
		);
	}
}