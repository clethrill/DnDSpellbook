import React, {Component} from 'react';

import {SAVE_BUTTON_TEXT, CLASS_NAMES} from './Constants.js';

class EditBook extends Component {
	constructor(props) {
		super(props);

		this.state = this.props.book;

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleClassChange = this.handleClassChange.bind(this);
		this.handleSaveChange = this.handleSaveChange.bind(this);
		this.handleAttackChange = this.handleAttackChange.bind(this);
	}
	handleNameChange(e) {
		let value = e.target.value;
		this.setState({name: value});
	}
	handleClassChange(e) {
		let value = e.target.value;
		this.setState({class: value});
	}
	handleSaveChange(e) {
		let value = e.target.value;
		this.setState({save: value});
	}
	handleAttackChange(e) {
		let value = e.target.value;
		this.setState({attack: value});
	}
	render() {
		let book = this.props.book;

		let class_options = Object.values(CLASS_NAMES).map((value, index) => {
			return <option key={index} value={value}>{value}</option>
		});

		return (
			<section>
				<div className="row">
					<h3 className="capitalise">{book.name}</h3>
				</div>

				<div className="row">
					<div className="four columns vertical-center">
						<label htmlFor="name">Book Name:</label>
					</div>
					<div className="eight columns">
						<input id="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
					</div>
				</div>

				<div className="row">
					<div className="four columns vertical-center">
						<label htmlFor="class">Class:</label>
					</div>
					<div className="eight columns">
						<select id="class" className="capitalise" value={this.state.class} onChange={this.handleClassChange} >
							{class_options}
						</select>
					</div>
				</div>

				<div className="row">
					<div className="four columns vertical-center">
						<label htmlFor="save">Spell Save DC:</label>
					</div>
					<div className="eight columns">
						<input id="save" type="number" min={8} max={25} value={this.state.save} onChange={this.handleSaveChange} />
					</div>
				</div>

				<div className="row">
					<div className="four columns vertical-center">
						<label htmlFor="attack">Spell Attack Bonus:</label>
					</div>
					<div className="eight columns">
						<input id="attack" type="number" min={2} max={15} value={this.state.attack} onChange={this.handleAttackChange} />
					</div>
				</div>

				<div className="row">
					<div className="twelve columns">
						<button onClick={this.props.onSave.bind(this, this.state)}>{SAVE_BUTTON_TEXT}</button>
					</div>
				</div>
			</section>
		);
	}
}

export default EditBook;
