import React, {Component} from 'react';

import SpellDetail from './spelldetail.js';
import nav from './nav.js';

export default class SpellBook extends Component {
	constructor (props) {
		super (props);

		this.state = {
			spellData: this.props.spellData,
			BookId: this.props.data.BookId,
			Name: this.props.data.Name,
			Spells: this.props.data.Spells
		};

	};

	render () {
		let spells = this.state.Spells.map((value, index) => {
			return (<SpellDetail data={this.state.spellData[value-1]} />);
		});

		return (
			<div>
				<h2>{this.state.Name}</h2>
				{spells}
			</div>
		);
	}

}
