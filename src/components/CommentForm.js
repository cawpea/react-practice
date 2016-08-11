import React, {Component} from 'react';

export default class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			author: '',
			text: ''
		};
	}
	handleAuthorChange(e) {
		this.setState({
			author: e.target.value
		})
	}
	handleTextChange(e) {
		this.setState({
			text: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		let author = this.state.author;
		let text = this.state.text;

		if( !author || !text ) {
			console.log('textboxes are empty');
			return;
		}

		this.props.onCommentSubmit({
			author: author,
			text: text
		});

		this.setState({
			author: '',
			text: ''
		});
	}
	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
				<input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
				<input type="submit" value="Post"/>
			</form>
		);
	}
}