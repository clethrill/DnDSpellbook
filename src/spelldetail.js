import React, {Component} from 'react';

export default class SpellDetail extends Component {
	render() {
		return (
			<section>
				<div className="row">
					<div className="col-xs-12">
						<h2>{this.props.data.Name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{this.props.data.Description}
					</div>
				</div>
			</section>
		);
	}
}
