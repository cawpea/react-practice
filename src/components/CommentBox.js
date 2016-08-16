import React, {Component} from 'react';
import $ from 'jquery';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import CSSModules from 'react-css-modules';
import style from './CommentBox.css';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		this.fetchCommentList();

		setInterval(() => {
			this.fetchCommentList();
		}, this.props.pollInterval || 3000);
	}
	handleCommentSubmit( comment ) {
		let comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({
			data: newComments
		});

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: (data) => {
				this.setState({
					data: data
				});
			},
			error: (xhr, status, err) => {
				console.error( this.props.url, status, err.toString() );
			}
		});
	}
	fetchCommentList() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({data: data});
			},
			error: (xhr, status, err) => {
				console.error( this.props.url, status, err.toString() );
			}
		})
	}
	render() {
		return (
			<div className='commentBox' styleName='base'>
				Hello world! I am a CommentBox.
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
			</div>
		);
	}
}

export default CSSModules(CommentBox, style);