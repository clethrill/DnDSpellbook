import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {data} from './data.js';

class Spell extends Component {
	render() {
		return (
			<div className="row" onClick={this.props.handleClick}>
				<div className="col-xs-8">
					{this.props.value.Name}
				</div>
			</div>
		);
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
			spells: data,
			spellbook: [
				{Name: "Elmon's Spellbook", BookId: 1, Spells: [1,2,3]},
				{Name: "Bard's Book", BookId: 2, Spells: [1,3,5]}
			],
			search: "",
			activeSpellbook: "",
			context: "list", //list, spell, book
			contextValue: 0 //id of spell or book
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSpellbook = this.handleSpellbook.bind(this);

		this.goToSpell = this.goToSpell.bind(this);

		this.spellList = this.spellList.bind(this);
		this.loadList = this.loadList.bind(this);
	}

	handleSearch(e) {
		this.setState({search: e.target.value.toLowerCase()});
	}

	handleSpellbook(e) {
		this.setState({activeSpellbook: e.target.value});
	}

	goToSpell(SpellId) {
		this.setState({context: "spell", contextValue: SpellId});
	}

	spellList(level) {
		let cantripList = this.state.spells.map((value, index) => {
			if (value.Name.indexOf(this.state.search) >= 0 && value.Level == level)
			return (<Spell value={value} key={index} handleClick={this.goToSpell.bind(this, value.SpellId)} />);
		});

		return cantripList;
	}

	loadList(name, list, key) {
		let newList = new Array();
		for(var i = 0; i < list.length; i++) {
			if(list[i]) {
				newList.push(list[i]);
			}
		}

		var section;
		if (newList.length > 0) {
			section = (
				<div key={key} className="row">
					<div className="col-xs-12">
						<h2>{name}</h2>
						<div className="row">
							<div className="col-xs-12">
								{newList}
							</div>
						</div>
					</div>
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
		//spell view
		let spells = [];
		for (var i=0; i<10; i++) {
			let name = "Level " + i;
			if (i == 0) name = "Cantrips";
			spells[i] = this.loadList(name, this.spellList(i), i);
		}

		//spellbook options
		let spellBookOptions = false;
		if (this.state.spellbook.length > 0) {
			spellBookOptions = this.state.spellbook.map((value, index) => {
				return (<option key={index} value={value.BookId}>{value.Name}</option>);
			});
		}

		return (
			<main>
				<Nav />
				<div className="row">
					<div className="col-xs-12">
						<h1>Spells {this.state.context + this.state.contextValue}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<input className="inline" value={this.state.search} onChange={this.handleSearch} />
						<select className="inline" value={this.state.activeSpellbook} onChange={this.handleSpellbook}>
							{spellBookOptions}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{this.printSpells(spells)}
					</div>
				</div>
	 	 	</main>
		);
	};
}

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
