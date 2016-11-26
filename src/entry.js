import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Spell extends Component {
	render() {
		 return <li className="inline">{this.props.value}</li>
	}
}

class Nav extends Component {
	render () {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">5e D&D SpellBook</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<form className="navbar-form navbar-right">
							<div className="form-group">
								<input type="text" placeholder="Email" className="form-control" />
							</div>
							<div className="form-group">
								<input type="password" placeholder="Password" className="form-control" />
							</div>
							<button type="submit" className="btn btn-success">Sign in</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

class Main extends Component {
	constructor (props) {
		super (props);
		this.state = {
			spells: [
				{name: "acid splash", level: 0, school: "abjuration", id: 1},
				{name: "fireball", level: 4, school: "conjuration", id: 2},
				{name: "firebolt", level: 0, school: "conjuration", id: 3},
				{name: "flame Breath", level: 2, school: "conjuration", id: 4},
				{name: "mending", level: 1, school: "conjuration", id: 5}
			],
			spellbook: [
				{name: "Elmon's Spellbook", id: 1, spells: [1,2,3]},
				{name: "Bard's Book", id: 2, spells: [1,3,5]}
			],
			search: ""
			activeSpellbook: "";

		};

		function GETcall(url, callbacks) {
			$.ajax({
				url: url,

				//this is a get call
				type: 'GET',

				success: callbacks.success ? callbacks.success : standard_callbacks.success,
				error: callbacks.error ? callbacks.error : standard_callbacks.error
			});
		}

		GETcall("https://te3fmtf49g.execute-api.ap-southeast-2.amazonaws.com/dev/api/get/spells", {
			success: (data) => {console.log(data)},
			error: (error) => {console.log(error)}
		})

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSpellbook = this.handleSpellbook.bind(this);
		this.spellList = this.spellList.bind(this);
		this.loadList = this.loadList.bind(this);
	}

	handleSearch(e) {
		this.setState({Search: e.target.value.toLowerCase()});
	}

	handleSpellbook(e) {
		this.setState({activeSpellbook: e.target.value});
	}

	spellList(level) {
		let cantripList = this.state.spells.map((value, index) => {
			if (value.name.indexOf(this.state.search) >= 0 && value.level == level)
			return (
				<div>

						<Spell value={value.name} key={index} />
						<button type="button" className="btn btn-sm btn-success">Add</button>

				</div>
			);
		});

		return cantripList;
	}

	loadList(name, list, section) {
		let newList = new Array();
		for(var i = 0; i < list.length; i++) {
			if(list[i]) {
				newList.push(list[i]);
			}
		}

		console.log(name, newList)
		var section;
		if (newList.length > 0) {
			section = (
				<div>
					<h2>{name}</h2>
					<ul>
						{newList}
					</ul>
				</div>
			)
		}
		return section;
	}

	printSpells(spellList) {
		return spellList.map((value, index) =>{
			return value;
		});
	}



	render() {
		let spells = [];
		spells[0] = this.loadList("Cantrips", this.spellList(0));
		spells[1] = this.loadList("Cantrips", this.spellList(0));
		for (var i=0; i<10; i++) {
			let name = "Level " + i;
			if (i == 0) name = "Cantrips";
			spells[i] = this.loadList(name, this.spellList(i));
		}


		return (
			<div >
				<Nav />
				<h1>Spells {this.props.name}</h1>
				<input className="inline" value={this.state.search} onChange={this.handleSearch} />
				<select className="inline" value={this.state.spellbook} onChange={this.handleSpellbook}>>
					<option value="Sorcerer3">Sorcerer Level 3</option>
					<option value="Gandalf">Gandalf Greybeard</option>
					<option value="Bard">Bard Bard</option>
					<option value="BlindMonk">Blind Monk</option>
				</select>
				{this.printSpells(spells)}
	 	 	</div>

		);
	};
}


ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
