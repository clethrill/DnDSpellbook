import React, {Component} from 'react';
import {data} from './data.js';
import nav from './nav.js';
import SpellDetail from './spelldetail.js';

//{name: "Elmon's Spellbook", id: 1, spells: [1,2,3]},
//{name: "Bard's Book", id: 2, spells: [1,3,5]}

class spellview extends Component {
	constructor (props) {
		super (props);
		this.state = {
			spellData: data,
			spellbookID: 1,
			spellbook: [
				{name: "Elmon's Spellbook", id: 1, spells: [1,2,3]},
				{name: "Bard's Book", id: 2, spells: [1,3,5]}
			],
		}

		this.loadSpellbook = this.loadSpellbook.bind(this);
	};

	function loadSpellbook {
		let spellList = this.state.spellData.map((value, index) => {
			//if (value.SpellId.indexOf(this.state.search) >= 0 && value.level == level)
			return (

			);
		});

		return spellList;
	}

	render () {
		let content = this.state.SpellData.map((value, index) => {
			return (

			)
			 (<SpellDetail data={this.state.spellData[this.props.context-1]} />);
		});
		let backButton = (<span onClick={this.goToList}>Back</span>);

		return (
			<main>
				<Nav />
				<div className="row">
					<div className="col-xs-8">
						<h1>Spells</h1>
					</div>
					<div className="col-xs-4">
						{backButton}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{content}
					</div>
				</div>
	 	 	</main>
		)
	}

}


export {spellview};
