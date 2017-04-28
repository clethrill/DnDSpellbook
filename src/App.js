import React, { Component } from 'react';

import SpellList from './SpellList.js';
import SpellDesc from './SpellDesc.js';
import NewBook from './NewBook.js';
import EditBook from './EditBook.js';

import {
	SPELL_LIST,
	TITLE,
	NEW_BOOK_BUTTON_TEXT,
	EDIT_BUTTON_TEXT,
	KNOWN_BUTTON_TEXT,
	ALL_BUTTON_TEXT,
	FILTER_BUTTON_TEXT,
	CLASS_NAMES,
	RIGHT_PANE_STATE
} from './Constants.js';
import {BinarySearch} from './Functions.js';
import SpellData from './Data.js';

class App extends Component {
	constructor(props) {
		super(props);

		//default start book
		let stored_books = [
			{value: 0, name: "My Spellbook", spells: [], class: CLASS_NAMES.BARBARIAN, save: 8, attack: 2}
		];
		if (typeof(Storage) !== "undefined" && localStorage.getItem("books")) {
			stored_books = JSON.parse(localStorage.getItem("books"));
		}

		this.state = {
			books: stored_books,
			spells: SpellData,

			snack: "",
			queued_snacks: [],

			current_spell_list: SPELL_LIST.ALL,
			current_spell_id: 1,
			current_book: 0,
			current_right_pane_state: RIGHT_PANE_STATE.NOTHING,
			current_filter_show_state: false
		};

		this.getRightPaneJSX = this.getRightPaneJSX.bind(this);
		this.getActiveSpellListButtonClass = this.getActiveSpellListButtonClass.bind(this);
		this.getActiveBookModeButtonClass = this.getActiveBookModeButtonClass.bind(this);

		this.handleSwitchList = this.handleSwitchList.bind(this);
		this.handleSwitchBook = this.handleSwitchBook.bind(this);
		this.handleSwitchSpell = this.handleSwitchSpell.bind(this);
		this.handleSwitchRightPaneState = this.handleSwitchRightPaneState.bind(this);

		this.handleNewBook = this.handleNewBook.bind(this);
		this.handleSaveBook = this.handleSaveBook.bind(this);
		this.handleSaveSpellToBook = this.handleSaveSpellToBook.bind(this);
		this.handleRemoveSpellFromBook = this.handleRemoveSpellFromBook.bind(this);
	}
	eatSnack(string) {

		//if there is no current snack
		if (this.state.snack === "") {
			//add this snack
			this.setState({snack: string});

			//after 3 seconds
			setTimeout(() => {
				//remove this snack
				this.setState({snack: ""});

				//if there are now any queues snacks start them off
				if (this.state.queued_snacks.length > 0) {
					setTimeout(() => {
						this.eatSnack(this.state.queued_snacks[0]);
						this.setState({queued_snacks: this.state.queued_snacks.splice(1)});
					}, 500);
				}
			}, 3000);
		}
		else {
			this.setState({queued_snacks: this.state.queued_snacks.concat([string])});
		}

	}
	saveData(data) {
		let stringified_data = JSON.stringify(data);
		localStorage.setItem("books", stringified_data);
	}
	returnKnownSpells(all_spells, known_spells) {
		//all spells is an array of all the spells
		//known spells is an array of spell_ids of known spells
		let array = [];

		for (var i=0; i<known_spells.length; i++) {
			for (var j=0; j<all_spells.length; j++) {
				if (known_spells[i] === all_spells[j].spell_id) {
					array.push(all_spells[j]);
				}
			}
		}

		return array;
	}
	getRightPaneJSX(pane_state) {
		let return_value;

		switch(pane_state) {
			case RIGHT_PANE_STATE.DESCRIPTION:
				let spell_index = BinarySearch(this.state.spells, this.state.current_spell_id, "spell_id");

				let current_book = this.state.books[this.state.current_book];
				let contained_in_book = false;
				for (let i=0; i<current_book.spells.length; i++) {
					if (current_book.spells[i] === this.state.current_spell_id) {
						contained_in_book = true;
					}
				}

				return_value = (
					<SpellDesc
						spell={this.state.spells[spell_index]}
						onAdd={this.handleSaveSpellToBook}
						onRemove={this.handleRemoveSpellFromBook}
						inBook={contained_in_book}
					/>
				);
				break;

			case RIGHT_PANE_STATE.NEW_BOOK:
				return_value = <NewBook onSave={this.handleNewBook} />
				break;

			case RIGHT_PANE_STATE.EDIT_BOOK:
				return_value = <EditBook book={this.state.books[this.state.current_book]} onSave={this.handleSaveBook} />
				break;

			default:
				return_value = <div />;
		}

		return return_value;
	}
	getActiveSpellListButtonClass(list) {
		return (list === this.state.current_spell_list) ? "button-primary" : "";
	}
	getActiveBookModeButtonClass(mode) {
		return (mode === this.state.current_right_pane_state) ? "button-primary" : "";
	}
	getFilterButtonClass() {
		return (this.state.current_filter_show_state) ? "button-primary": "";
	}
	handleSwitchList(list) {
		this.setState({current_spell_list: list});

		if (this.state.current_right_pane_state === RIGHT_PANE_STATE.DESCRIPTION) {
			this.handleSwitchRightPaneState(RIGHT_PANE_STATE.NOTHING);
		}
	}
	handleSwitchBook(e) {
		let book = e.target.value;
		this.setState({current_book: book});
	}
	handleSwitchSpell(spell) {
		this.setState({current_spell_id: spell});
	}
	handleSwitchRightPaneState(state) {
		this.setState({current_right_pane_state: state});
	}
	handleSwitchFilter() {
		this.setState({current_filter_show_state: !this.state.current_filter_show_state});
	}
	handleNewBook(data) {
		function getSmallestPositiveNumberNotInArray(array) {
			let marker = 1;
			while (array.indexOf(marker) >= 0) marker++;
			return marker;
		}

		try {
			//add some values to the book
			let values = [];
			for (let i=0; i<this.state.books.length; i++) values.push(this.state.books[i].value);
			data.value = getSmallestPositiveNumberNotInArray(values);
			data.spells = [];

			//update in memory
			let updated_books = this.state.books;
			updated_books.push(data);
			this.setState({books: updated_books, current_book: updated_books.length-1});

			//store in local storage
			this.saveData(updated_books);

			//tell the  user about our successes
			this.eatSnack("Book Created");
		}
		catch(e) {
			console.error(e);
		}
	}
	handleSaveBook(data) {
		try {
			//update in memory
			let updated_books = this.state.books;
			updated_books[this.state.current_book] = data;
			this.setState({books: updated_books});

			//store in local Storage
			this.saveData(updated_books);

			//tell the user about our successes
			this.eatSnack("Saved Changes");
		}
		catch(e) {
			console.error(e);
		}
	}
	handleSaveSpellToBook(spell_id) {
		try {
			//update in memory
			let updated_books = this.state.books;
			updated_books[this.state.current_book].spells.push(spell_id);
			this.setState({books: updated_books});

			//store in local storage
			this.saveData(updated_books);

			//tell the user about our successes
			this.eatSnack("Added spell to book");
		}
		catch(e) {
			console.error(e)
		}
	}
	handleRemoveSpellFromBook(spell_id) {
		try {
			//update in memory
			let updated_books = this.state.books;
			let index = -1;
			for (let i=0; i<updated_books[this.state.current_book].spells.length; i++) {
				if (updated_books[this.state.current_book].spells[i] === spell_id) {
					index = i;
					break;
				}
			}
			updated_books[this.state.current_book].spells.splice(index, 1);
			this.setState({books: updated_books});

			//store in local storage
			this.saveData(updated_books);

			//tell the user about our successes
			this.eatSnack("Removed spell from book");
		}
		catch(e) {
			console.error(e);
		}
	}
	render() {
		let spellbook_options = this.state.books.map((value, index) => {
			return <option key={index} value={value.value}>{value.name}</option>
		});

		let current_book = this.state.books[this.state.current_book];

		let spell_options = (this.state.current_spell_list === SPELL_LIST.ALL) ? (this.state.spells) : (this.returnKnownSpells(this.state.spells, current_book.spells));

		let right_pane = this.getRightPaneJSX(this.state.current_right_pane_state);

		let snackbar_show_class = (this.state.snack !== "") ? "show" : "";

		return (
			<main className="container">

				<div className="row">
					<div className="six columns">
						<div className="row">
							<div className="twelve columns">
								<h1>{TITLE}</h1>
							</div>
						</div>
						<div className="row">
							<div className="four columns">
								<button
									className={this.getActiveSpellListButtonClass(SPELL_LIST.KNOWN)}
									onClick={this.handleSwitchList.bind(this, SPELL_LIST.KNOWN)}
								>{KNOWN_BUTTON_TEXT}</button>
							</div>
							<div className="four columns">
								<button
									className={this.getActiveSpellListButtonClass(SPELL_LIST.ALL)}
									onClick={this.handleSwitchList.bind(this, SPELL_LIST.ALL)}
								>{ALL_BUTTON_TEXT}</button>
							</div>
							<div className="four columns">
								<button
									className={this.getFilterButtonClass()}
									onClick={this.handleSwitchFilter.bind(this)}
								>{FILTER_BUTTON_TEXT}</button>
							</div>
						</div>
					</div>

					<div className="six columns">
						<div className="row spacer" />
						<div className="row">
							<div className="four columns">
								<button
									className={this.getActiveBookModeButtonClass(RIGHT_PANE_STATE.NEW_BOOK)}
									onClick={this.handleSwitchRightPaneState.bind(this, RIGHT_PANE_STATE.NEW_BOOK)}
								>{NEW_BOOK_BUTTON_TEXT}</button>
							</div>
							<div className="six columns">
								<select value={current_book.value} onChange={this.handleSwitchBook}>
									{spellbook_options}
								</select>
							</div>
							<div className="two columns">
								<button
									className={this.getActiveBookModeButtonClass(RIGHT_PANE_STATE.EDIT_BOOK)}
									onClick={this.handleSwitchRightPaneState.bind(this, RIGHT_PANE_STATE.EDIT_BOOK)}
								>{EDIT_BUTTON_TEXT}</button>
							</div>
						</div>
						<div className="row">
							<div className="four columns capitalise vertical-center"><strong>Class:</strong> {current_book.class}</div>
							<div className="four columns capitalise vertical-center"><strong>Save DC:</strong> {current_book.save}</div>
							<div className="four columns capitalise vertical-center"><strong>Attack Bonus:</strong> {current_book.attack}</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="six columns">
						<SpellList
							spells={spell_options}
							onSwitchSpell={this.handleSwitchSpell}
							onSwitchRightPane={this.handleSwitchRightPaneState}
							showFilter={this.state.current_filter_show_state}
						/>
					</div>

					<div className="six columns">
						{right_pane}
					</div>
				</div>

				<section>
					<div id="snackbar" className={snackbar_show_class}>{this.state.snack}</div>
				</section>

			</main>
		);
	}
}

export default App;
