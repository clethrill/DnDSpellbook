import {data} from './data.js';
import {nav} from './nav.js';

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
		return (
			<nav />
			<ul>
				{this.loadSpellbook}
			</ul>
		)
	}

}


export {spellview};
