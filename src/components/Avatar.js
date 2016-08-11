import React, {Component} from 'react';

export default class Avatar extends Component {
	constructor() {
		super();
	}
	render() {
		let src = `./assets/image/${this.props.user.id}.png`;

		return(
			<div>
				<img src={src} width={this.props.width} height={this.props.height} alt={this.props.alt}/>
				<p>{this.props.user.name}</p>
			</div>
		);
	}
}
Avatar.propTypes = {
	user: React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired
	}),
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
	alt: React.PropTypes.string
};
Avatar.defaultProps = {
	user: {
		id: 0,
		name: 'default user'
	},
	width: 200,
	height: 200,
	alt: 'alt name'
};