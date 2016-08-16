import React, {Component} from 'react';
import Comment from './Comment.js';
import CSSModules from 'react-css-modules';
import style from './CommentList.css';

class CommentList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var commentNodes = this.props.data.map((comment) => {
			return (<Comment key={comment.id} author={comment.author}>{comment.text}</Comment>);
		});

		return (
			<div className='commentList' styleName='base'>
				{commentNodes}
			</div>
		);
	}
}

export default CSSModules(CommentList, style);