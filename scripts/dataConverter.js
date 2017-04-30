var jsonSpellData = require("./spellData.js");

const CLASS_NAMES = {
	ALL: "all",
	BARBARIAN: "barbarian",
	BARD: "bard",
	CLERIC: "cleric",
	DRUID: "druid",
	FIGHTER: "fighter",
	MONK: "monk",
	PALADIN: "paladin",
	RANGER: "ranger",
	ROGUE: "rogue",
	SORCERER: "sorcerer",
	WARLOCK: "warlock",
	WIZARD: "wizard"
};

const SCHOOLS = {
	ABJURATION: "abjuration",
	CONJURATION: "conjuration",
	DIVINATION: "divination",
	ENCHANTMENT: "enchantment",
	EVOCATION: "evocation",
	ILLUSION: "illusion",
	NECROMANCY: "necromancy",
	TRANSMUTATION:  "transmutation"
};

const AREAS_OF_EFFECT = {
	CONE: "cone",
	CUBE: "cube",
	CYLINDER: "cylinder",
	LINE: "line",
	SPHERE: "sphere"
}

const RANGE_TYPES = {
	RANGE: {
		name: "range",
		values: ["value", "unit", "aoe_name", "aoe_value"]
	},
	SELF: {
		name: "self",
		values: ["aoe_name", "aoe_value"]
	},
	TOUCH: {
		name: "touch",
		values: []
	},
	SPECIAL: {
		name: "special",
		values: []
	}
};

const CASTING_TIME_TYPES = {
	ACTION: {
		name: "action",
		values: ["value", "unit"]
	},
	BONUS: {
		name: "bonus action",
		values: ["value", "unit"]
	},
	REACTION: {
		name: "reaction",
		values: ["value", "unit", "condition"]
	},
	LONGER: {
		name: "longer",
		values: ["value", "unit"]
	}
};

const DURATION_TYPES = {
	INSTANTANEOUS: {
		name: "instantaneous",
		values: []
	},
	ROUND: {
		name: "round",
		values: ["value", "unit"]
	},
	CONCENTRATION: {
		name: "concentration",
		values: ["value", "unit"]
	},
	TIME: {
		name: "time",
		values: ["value", "unit"]
	},
	UNTIL_DISPELLED: {
		name: "until dispelled",
		values: []
	}
};

function levelTextToValue(text) {
	var n = Number(text.charAt(0));
	return ((isNaN(n)) ? 0 : n);
}
function rangeTextToType(text) {
	text = text.toLowerCase();
	if (~text.indexOf("feet"))return RANGE_TYPES.RANGE;
	else if (~text.indexOf("self")) return RANGE_TYPES.SELF;
	else if (~text.indexOf("touch")) return RANGE_TYPES.TOUCH;
	else if (~text.indexOf("special")) return RANGE_TYPES.SPECIAL;
	else return false;
}
function castingTimeTextToType(text) {
	text = text.toLowerCase();
	if (~text.indexOf("bonus")) return CASTING_TIME_TYPES.BONUS;
	else if (~text.indexOf("reaction")) return CASTING_TIME_TYPES.REACTION;
	else if (~text.indexOf("action")) return CASTING_TIME_TYPES.ACTION;
	else if (~text.indexOf("minute")) return CASTING_TIME_TYPES.LONGER;
	else return false;
}
function durationTextToType(text) {
	text = text.toLowerCase();
	if (~text.indexOf("instant")) return DURATION_TYPES.INSTANTANEOUS;
	else if (~text.indexOf("round")) return DURATION_TYPES.ROUND;
	else if (~text.indexOf("concentration")) return DURATION_TYPES.CONCENTRATION;
	else if (~text.indexOf("minute") || ~text.indexOf("hour") || ~text.indexOf("day")) return DURATION_TYPES.TIME;
	else if (~text.indexOf("dispelled")) return DURATION_TYPES.UNTIL_DISPELLED;
	else return false;
}

function convert(spell, index) {
	var obj = {
  	spell_id: index,
    name: spell.name.toLowerCase(),
    level : {
    	value: levelTextToValue(spell.level),
		text: spell.level
    },
    ritual: spell.ritual,
    school: spell.school.toLowerCase(),
    classes: spell.class.toLowerCase().split(", "),
    components: {
		vocal: (spell.components.indexOf("V") >= 0),
		somatic: (spell.components.indexOf("S") >= 0),
		material: (spell.components.indexOf("M") >= 0),
		extra: spell.material,
		text: spell.components + ((spell.material) ? " (" + spell.material + ")" : "")
    },
    range: {
    	type: rangeTextToType(spell.range),
    	text: spell.range
    },
    casting_time: {
    	type: castingTimeTextToType(spell.casting_time),
    	text: spell.casting_time
    },
    duration: {
    	type: durationTextToType(spell.duration),
    	text: spell.duration
    },
    description: spell.desc.slice(3, -4).split("</p><p>"),
    level_up_description: (spell.higher_level) ? spell.higher_level.slice(3, -4) : null
  };
  return obj;
}

var newArr = [];
for (var i=0; i<jsonSpellData.length; i++) {
	try {
		newArr.push(convert(jsonSpellData[i], i));
	}
	catch(e) {
		console.log("#" + i + ": " + jsonSpellData[i].name);
		console.log(e);
	}
}

//write to  disk
var fs = require('fs');
fs.writeFileSync("../src/Data.js", "var data = " + JSON.stringify(newArr) + "; export default data;");
