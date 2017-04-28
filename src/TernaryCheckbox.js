import React, { Component } from 'react';

//props
// onChange (called when state is updated and returns value)
// values (contains array of length 3 with values for each state)
class TernaryCheckbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			state: 0
		};

		this.states = ["?", "✓", "✗"];

		this.cycleState = this.cycleState.bind(this);
	}
	cycleState() {
		let newState = (++this.state.state) % 3;
		this.setState({state: newState});
		this.props.onChange(this.props.values[newState]);
	}
	render() {
		return (
			<div className={"noselect ternary-checkbox checkbox-state-"+this.state.state} onClick={this.cycleState}>
				{this.states[this.state.state]}
			</div>
		);
	}
}

export default TernaryCheckbox;
