import React, { Component } from 'react';

class MinMax extends Component {
	constructor(props) {
		super(props);

		this.state = {
			min: this.props.min,
			max: this.props.max
		};
	}
	updateMinMax(key, e) {
		var obj = {
			min: this.state.min,
			max: this.state.max
		}
		obj[key] = Number(e.target.value);
		//push max up with min exceeds it
		switch(key) {
			case "min":
				if (obj.min > obj.max) {
					obj.max = obj.min;
				}
				break;
			case "max":
				if (obj.max < obj.min) {
					obj.min = obj.max;
				}
				break;
			default:
				break;
		}
		//update state
		this.setState(obj);
		this.props.onChange(obj);
	}
	render() {
		return (
			<div className={"noselect minmax"}>
				<input type="number" min={this.props.min} max={this.props.max} value={this.state.min} onChange={this.updateMinMax.bind(this, "min")} />
				<span>-</span>
				<input type="number" min={this.props.min} max={this.props.max} value={this.state.max} onChange={this.updateMinMax.bind(this, "max")} />
			</div>
		);
	}
}

export default MinMax;
