import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Spell extends Component {
	render() {
		 return <li>{this.props.value}</li>
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
				{name: "acid splash", level: 0, school: "abjuration"},
				{name: "fireball", level: 4, school: "conjuration"},
				{name: "firebolt", level: 0, school: "conjuration"}
			],
			input: ""
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

		GETcall("https://te3fmtf49g.execute-api.ap-southeast-2.amazonaws.com/dev/api/hello", {
			success: (data) => {console.log(data)},
			error: (error) => {console.log(error)}
		})

		this.handleChange = this.handleChange.bind(this);
		this.spellList = this.spellList.bind(this);
		this.loadList = this.loadList.bind(this);
	}

	handleChange(e) {
		this.setState({input: e.target.value});
	}

	spellList(level) {
		let cantripList = this.state.spells.map((value, index) => {
			if (value.name.indexOf(this.state.input) >= 0 && value.level == level)
			return (<Spell value={value.name} key={index} />);
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
		spells[4] = this.loadList("Level 4", this.spellList(4));

		return (
			<div>
				<Nav />
				<h1>Spells {this.props.name}</h1>
				<input values={this.state.input} onChange={this.handleChange} />
				{this.printSpells(spells)}
	 	 	</div>

		);
	};
}


ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
