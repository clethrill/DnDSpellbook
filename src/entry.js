import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {data, books} from './data.js';

import Nav from './nav.js';
import SpellDetail from './spelldetail.js';
import SpellBook from './spellbook.js';

class Spell extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-8" onClick={this.props.handleClick}>
					{this.props.value.Name}
				</div>
				<div className="col-xs-4">
					<button onClick={this.props.handleAdd}>Add</button>
				</div>
			</div>
		);
	}
}

class Main extends Component {
	constructor (props) {
		super (props);
		this.state = {
			spells: data,
			spellbook: books,
			search: "",
			activeSpellbook: 1,
			context: "list", //list, spell, book
			contextValue: 0 //id of spell or book
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSpellbook = this.handleSpellbook.bind(this);

		this.goToSpell = this.goToSpell.bind(this);
		this.goToBook = this.goToBook.bind(this);
		this.goToList = this.goToList.bind(this);

		this.addSpell = this.addSpell.bind(this);

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
	goToBook(BookId) {
		this.setState({context: "book", contextValue: BookId});
	}
	goToList() {
		this.setState({context: "list", contextValue: 0});
	}

	addSpell(SpellId) {
		let arr = this.state.spellbook;
		arr[this.state.activeSpellbook-1].Spells.push(SpellId);
		this.setState({spellbook: arr});
	}

	spellList(level) {
		let cantripList = this.state.spells.map((value, index) => {
			if (value.Name.indexOf(this.state.search) >= 0 && value.Level == level)
			return (
				<Spell
					value={value}
					key={index}
					handleClick={this.goToSpell.bind(this, value.SpellId)}
					handleAdd={this.addSpell.bind(this, value.SpellId)}
				/>
			);
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

		//switch content based on context
		let content = false;
		let backButton = false;
		if (this.state.context == "list") {
			content = (
				<div>
					<div className="row">
						<div className="col-xs-4">
							<input className="inline" value={this.state.search} onChange={this.handleSearch} />
						</div>
						<div className="col-xs-4">
							<select className="inline" value={this.state.activeSpellbook} onChange={this.handleSpellbook}>
								{spellBookOptions}
							</select>
						</div>
						<div className="col-xs-4">
							<button onClick={this.goToBook.bind(this, this.state.activeSpellbook)}>View Book</button>
						</div>
					</div>
					{this.printSpells(spells)}
				</div>
			);
		}
		else if (this.state.context == "spell") {
			content = (<SpellDetail data={this.state.spells[this.state.contextValue-1]} />);
			backButton = (<span onClick={this.goToList}>Back</span>);
		}
		else if (this.state.context == "book") {
			content = (
				<SpellBook
					data={this.state.spellbook[this.state.contextValue-1]}
					spellData={this.state.spells}
				/>
			);
			backButton = (<span onClick={this.goToList}>Back</span>);
		}

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
		);
	};
}

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
