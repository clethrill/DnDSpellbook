import React, { Component } from 'react';

import {RIGHT_PANE_STATE} from './Constants.js';

class SpellList extends Component {
	constructor(props) {
		super(props);

		this.switchToSpell = this.switchToSpell.bind(this);
	}
	switchToSpell(spell) {
		this.props.onSwitchSpell(spell.spell_id);
		this.props.onSwitchRightPane(RIGHT_PANE_STATE.DESCRIPTION);
	}
	render() {
		let spell_options = this.props.spells.map((value, index) => {
			return (
				<tr key={index} onClick={this.switchToSpell.bind(this, value)}>
					<td className="capitalise">{value.name}</td>
					<td className="capitalise">{value.school}</td>
					<td className="capitalise">{value.level.text}</td>
				</tr>
			);
		});

		return (
			<section>
				<div className="row">
					<div className="twelve columns">
						<table>
							<thead>
								<tr><th>Name</th><th>School</th><th>Level</th></tr>
							</thead>
							<tbody>
								{spell_options}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		);
	}
}

export default SpellList;
