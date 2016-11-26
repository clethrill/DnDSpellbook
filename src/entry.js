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
				"Fireball",
				"Firebolt"
			]
		};

		function GETcall(url, callbacks) {
			$.ajax({
				// the url something like
				/*
					/api/echo
				*/
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
	}
	render() {
		let spellList = this.state.spells.map((value, index) => {
			return (<Spell value={value} key={index} />);
		})
		return (
			<div>
				<Nav />
				<h1>Spells {this.props.name}</h1>
				<ul>
					{spellList}
				</ul>
	 	 	</div>

		);
	};
}


ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
