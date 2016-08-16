import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import style from './Comment.css';

class Comment extends Component {
	render() {
		return (
			<div className="comment" styleName='base'>
				<h3 className="commentAuthor" styleName='author'>{this.props.author}</h3>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default CSSModules(Comment, style);