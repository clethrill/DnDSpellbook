import React, { Component } from 'react';

import {CASTING_TIME_TEXT, RANGE_TEXT, COMPONENTS_TEXT, DURATION_TEXT, ADD_SPELL_BUTTON_TEXT, REMOVE_SPELL_BUTTON_TEXT} from './Constants.js';

class SpellDesc extends Component {
	render() {
		let spell = this.props.spell;

		let spell_descriptions = this.props.spell.description.map((value, index) => {
			return <p key={index}>{value}</p>
		});

		let add_or_remove_button = false;
		if (this.props.inBook === false) {
			add_or_remove_button = <button className="button-primary green" onClick={this.props.onAdd.bind(this, spell.spell_id)}>{ADD_SPELL_BUTTON_TEXT}</button>
		}
		else if (this.props.inBook === true) {
			add_or_remove_button = <button className="button-primary red" onClick={this.props.onRemove.bind(this, spell.spell_id)}>{REMOVE_SPELL_BUTTON_TEXT}</button>
		}

		return (
			<section>
				<div className="row">
					<h3 className="capitalise">{spell.name}</h3>
				</div>
				<div className="row">
					<h5 className="subheading capitalise">{spell.school} {spell.level.text}</h5>
				</div>
				<div className="row">
					<div className="twelve columns">
						<div><strong>{CASTING_TIME_TEXT}:</strong> {spell.casting_time.text}</div>
						<div><strong>{RANGE_TEXT}:</strong> {spell.range.text}</div>
						<div><strong>{COMPONENTS_TEXT}:</strong> {spell.components.text}</div>
						<div><strong>{DURATION_TEXT}:</strong> {spell.duration.text}</div>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						{spell_descriptions}
						<p>{spell.level_up_description}</p>
					</div>
				</div>
				<div className="row">
					{add_or_remove_button}
				</div>
			</section>
		);
	}
}

export default SpellDesc;
