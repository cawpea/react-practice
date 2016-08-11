import React, {Component} from 'react';
import Avatar from './Avatar.js';

export default class ChildAvatar extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Avatar/>
				<p>I'm child avatar.</p>
			</div>
		);
	}
}