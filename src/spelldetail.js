import React, {Component} from 'react';

export default class SpellDetail extends Component {
	constructor (props) {
		super (props);

		this.components = this.components.bind(this);

		console.log("kjgkhjgk")
	}

	components() {
		//return this.props.data[value] ? output : "";
		var output = "Hey";
		console.log("Heya");
		if(this.props.data.ComponentsVocal)
			output.concat("V ");
		if(this.props.data.ComponentsSomatic)
			output.concat("S ");
		if(this.props.data.ComponentsMaterial)
		{
			output.concat("M ");
			output.concat(this.props.data.ComponentsMaterialExtra);
		}
		console.log(output, "Heya");

		return output;
	}

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
						<p> Spell Level: {this.props.data.Level == 0 ? "Cantrip" : this.props.data.Level}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>School: {this.props.data.School}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Range: {this.props.data.Range}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Casting Time: {this.props.data.CastingTime}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Components: {this.components}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Duration: {this.props.data.Duration}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>School: {this.props.data.School}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Duration: {this.props.data.Duration}</p>
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
