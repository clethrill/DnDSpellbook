import React, { Component } from 'react';
import _ from 'lodash';

import TernaryCheckbox from './TernaryCheckbox.js';
import MinMax from './MinMax.js';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {CLASS_NAMES, SCHOOLS, RANGE_TYPES, CASTING_TIME_TYPES, DURATION_TYPES, RIGHT_PANE_STATE, TERNARY_VALUES} from './Constants.js';

const MIN = 0;
const MAX = 1;

function getOptions(type, constantObj) {
	let arrayOfOptions = [];

	switch(type) {
		case "schools":
			for (let key in constantObj) {
				arrayOfOptions.push({value: constantObj[key], label: constantObj[key]});
			}
			break;
		default:
			for (let key in constantObj) {
				arrayOfOptions.push({value: constantObj[key].name, label: constantObj[key].name});
			}
			break;
	}

	return arrayOfOptions;
}

class SpellList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			class: "all",
			levels: [0, 9],     //min and max levels to be included
			components: {
				vocal: TERNARY_VALUES.INDETERMINATE,
				somatic: TERNARY_VALUES.INDETERMINATE,
				material: TERNARY_VALUES.INDETERMINATE
			},
			schools: [],        //array of schools to be included
			range: [],          //array of ranges to be included
			casting: [],        //array of casting times to be included
			duration: [],       //array of durations to be included
			concentration: TERNARY_VALUES.INDETERMINATE,
			ritual: TERNARY_VALUES.INDETERMINATE
		};

		this.ternary_values = [TERNARY_VALUES.INDETERMINATE, TERNARY_VALUES.TRUE, TERNARY_VALUES.FALSE];

		this.switchToSpell = this.switchToSpell.bind(this);
		this.handleClassChange = this.handleClassChange.bind(this);
	}
	switchToSpell(spell) {
		this.props.onSwitchSpell(spell.spell_id);
		this.props.onSwitchRightPane(RIGHT_PANE_STATE.DESCRIPTION);
	}
	spellFitsCritera(spell) {
		function getStateKey(stateKey, spellKey) {
			return ((stateKey === TERNARY_VALUES.TRUE) ? true : (stateKey === TERNARY_VALUES.FALSE) ? false : spellKey);
		}

		//check class
		if (this.state.class != "all" && spell.classes.indexOf(this.state.class) < 0) {
			return false;
		}

		//check level
		if (this.state.levels[MIN] > spell.level.value || spell.level.value > this.state.levels[MAX]) {
			return false;
		}

		//check components
		for (let key in this.state.components) {
			if (getStateKey(this.state.components[key], spell.components[key]) !== spell.components[key]) {
				return false;
			}
		}

		//check school, range, casting time, duration
		if (this.state.schools.length > 0 && this.state.schools.indexOf(spell.school) < 0) {
			return false;
		}
		if (this.state.range.length > 0 && this.state.range.indexOf(spell.range.type.name) < 0) {
			return false;
		}
		if (this.state.casting.length > 0 && this.state.casting.indexOf(spell.casting_time.type.name) < 0) {
			return false;
		}
		if (this.state.duration.length > 0 && this.state.duration.indexOf(spell.duration.type.name) < 0) {
			return false;
		}

		//check concentration
		if ((this.state.concentration === TERNARY_VALUES.TRUE && spell.duration.type !== DURATION_TYPES.CONCENTRATION) || (this.state.concentration === TERNARY_VALUES.FALSE && spell.duration.type === DURATION_TYPES.CONCENTRATION)) {
			return false;
		}

		//check ritual
		if ((this.state.ritual === TERNARY_VALUES.TRUE && spell.ritual !== true) || (this.state.ritual === TERNARY_VALUES.FALSE && spell.ritual === true)) {
			return false;
		}

		return true;
	}
	handleClassChange(e) {
		this.setState({class: e.target.value});
	}
	//arguments (...object_location, value);
	handleTernaryChange(...args) {
		// grab value off end
		let value = args.splice(args.length-1, 1)[0];

		// create object from state
		let obj = {};
		obj[args[0]] = this.state[args[0]];

		// set value in object of obj.path[0].path[1].path[2]... etc.
		let path = args.join(".");
		_.set(obj, path, value);

		// update state
		this.setState(obj);
	}
	handleMinMaxChange(key, minMaxObj) {
		let obj = {};
		obj[key] = [minMaxObj.min, minMaxObj.max];
		this.setState(obj);
	}
	handleMultiSelectChange(key, valueArray) {
		let  obj = {};
		obj[key] = [];
		for (let i=0; i<valueArray.length; i++) {obj[key][i] = valueArray[i].value;}
		this.setState(obj);
	}
	drawFilters() {
		if (this.props.showFilter) {
			let school_options   = getOptions("schools", SCHOOLS);
			let range_options    = getOptions("range", RANGE_TYPES);
			let casting_options  = getOptions("casting", CASTING_TIME_TYPES);
			let duration_options = getOptions("duration", DURATION_TYPES);
			let class_options = Object.values(CLASS_NAMES).map((value, index) => {
				return <option key={index} value={value}>{value}</option>
			});

			return (
				<div className="row filters">
					<div className="twelve columns">
						<div className="row">
							<div className="three columns">
								<label className="label">Class</label>
							</div>
							<div className="nine columns">
								<select id="class_filter" value={this.state.classes} onChange={this.handleClassChange}>
									{class_options}
								</select>
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Levels</label>
							</div>
							<div className="nine columns">
								<MinMax min={0} max={9} onChange={this.handleMinMaxChange.bind(this, "levels")}/>
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Components</label>
							</div>
							<div className="one columns">
								<label className="label">V</label>
							</div>
							<div className="two columns">
								<TernaryCheckbox onChange={this.handleTernaryChange.bind(this, "components", "vocal")} values={this.ternary_values} />
							</div>
							<div className="one columns">
								<label className="label">S</label>
							</div>
							<div className="two columns">
								<TernaryCheckbox onChange={this.handleTernaryChange.bind(this, "components", "somatic")} values={this.ternary_values} />
							</div>
							<div className="one columns">
								<label className="label">M</label>
							</div>
							<div className="two columns">
								<TernaryCheckbox onChange={this.handleTernaryChange.bind(this, "components", "material")} values={this.ternary_values} />
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">School</label>
							</div>
							<div className="nine columns">
								<Select name="school-filter" multi={true} value={this.state.schools} options={school_options} onChange={this.handleMultiSelectChange.bind(this, "schools")} />
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Range</label>
							</div>
							<div className="nine columns">
								<Select name="range-filter" multi={true} value={this.state.range} options={range_options} onChange={this.handleMultiSelectChange.bind(this, "range")} />
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Casting Time</label>
							</div>
							<div className="nine columns">
								<Select name="casting-filter" multi={true} value={this.state.casting} options={casting_options} onChange={this.handleMultiSelectChange.bind(this, "casting")} />
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Duration</label>
							</div>
							<div className="nine columns">
								<Select name="duration-filter" multi={true} value={this.state.duration} options={duration_options} onChange={this.handleMultiSelectChange.bind(this, "duration")} />
							</div>
						</div>
						<div className="row">
							<div className="three columns">
								<label className="label">Concentration</label>
							</div>
							<div className="three columns">
								<TernaryCheckbox onChange={this.handleTernaryChange.bind(this, "concentration")} values={this.ternary_values} />
							</div>
							<div className="three columns">
								<label className="label">Ritual</label>
							</div>
							<div className="three columns">
								<TernaryCheckbox onChange={this.handleTernaryChange.bind(this, "ritual")} values={this.ternary_values} />
							</div>
						</div>
					</div>
				</div>
			);
		}
		else {
			return <div/>
		}
	}
	render() {
		let spell_options = this.props.spells.map((value, index) => {
			if (this.spellFitsCritera(value)) {
				return (
					<tr key={index} onClick={this.switchToSpell.bind(this, value)}>
						<td className="capitalise">{value.name}</td>
						<td className="capitalise">{value.school}</td>
						<td className="capitalise">{value.level.text}</td>
					</tr>
				);
			}
		});

		let filters = this.drawFilters();

		return (
			<section>
				{filters}
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
