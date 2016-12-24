//Title
export const TITLE = "D&D 5e Spellbook";

//Text
export const CASTING_TIME_TEXT = "Casting Time";
export const RANGE_TEXT = "Range";
export const COMPONENTS_TEXT = "Components";
export const DURATION_TEXT = "Duration";

//Buttons
export const NEW_BOOK_BUTTON_TEXT = "New Book";
export const EDIT_BUTTON_TEXT = "Edit";
export const SAVE_BUTTON_TEXT = "Save";
export const ADD_SPELL_BUTTON_TEXT = "Add to Spellbook";
export const REMOVE_SPELL_BUTTON_TEXT = "Remove from Spellbook";
export const KNOWN_BUTTON_TEXT = "Known Spells";
export const ALL_BUTTON_TEXT = "All Spells";
export const FILTER_BUTTON_TEXT = "Filters";

//State
export const SPELL_LIST = {
	KNOWN: "known",
	ALL: "all"
};

export const RIGHT_PANE_STATE = {
	NOTHING: "nothing",
	DESCRIPTION: "description",
	NEW_BOOK: "new_book",
	EDIT_BOOK: "edit_book"
};

//Data
export const CLASS_NAMES = {
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

export const SCHOOLS = {
	ABJURATION: "abjuration",
	CONJURATION: "conjuration",
	DIVINATION: "divination",
	ENCHANTMENT: "enchantment",
	EVOCATION: "evocation",
	ILLUSION: "illusion",
	NECROMANCY: "necromancy",
	TRANSMUTATION:  "transmutation"
};

export const AREAS_OF_EFFECT = {
	CONE: "cone",
	CUBE: "cube",
	CYLINDER: "cylinder",
	LINE: "line",
	SPHERE: "sphere"
}

export const RANGE_TYPES = {
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

export const CASTING_TIME_TYPES = {
	ACTION: {
		name: "action",
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

export const DURATION_TYPES = {
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
	}
};
