var data = [
	{
		SpellId: 1,
		Name: "acid splash",
		Level: 0,
		School: "abjuration",
		Classes: ["sorcerer", "wizard"],
		Range: "60 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
		LevelUpDescription: "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	},
	{
		SpellId: 2,
		Name: "chill touch",
		Level: 0,
		School: "necromancy",
		Classes: ["sorcerer", "warlock", "wizard"],
		Range: "120 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "1 round",
		Description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
		LevelUpDescription: "This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	},
	{
		SpellId: 3,
		Name: "absorb elements",
		Level: 1,
		School: "abjuration",
		Classes: ["druid", "ranger", "wizard"],
		Range: "self",
		CastingTime: "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
		ComponentsVocal: false,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "1 round",
		Description: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
		LevelUpDescription: "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
	},
	{
		SpellId: 4,
		Name: "catapult",
		Level: 1,
		School: "transmutation",
		Classes: ["sorcerer", "wizard"],
		Range: "150 feet",
		CastingTime: "1 action",
		ComponentsVocal: false,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.",
		LevelUpDescription: "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
	},
	{
		SpellId: 5,
		Name: "invisibility",
		Level: 2,
		School: "illusion",
		Classes: ["bard", "sorcerer", "warlock", "wizard"],
		Range: "touch",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "an eyelash encased in gum arabic",
		Duration: "concentration, up to 1 hour",
		Description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell.",
		LevelUpDescription: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
	},
	{
		SpellId: 6,
		Name: "firebolt",
		Level: 0,
		School: "evocation",
		Classes: ["sorcerer", "wizard"],
		Range: "120 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
		LevelUpDescription: "This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
	},
	{
		SpellId: 7,
		Name: "sword burst",
		Level: 0,
		School: "conjuration",
		Classes: ["sorcerer", "warlock", "wizard"],
		Range: "5 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: false,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage.",
		LevelUpDescription: "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	},
	{
		SpellId: 8,
		Name: "vicious mockery",
		Level: 0,
		School: "enchantment",
		Classes: ["bard"],
		Range: "60 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: false,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
		LevelUpDescription: "This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
	},
	{
		SpellId: 9,
		Name: "bane",
		Level: 1,
		School: "enchantment",
		Classes: ["bard", "cleric"],
		Range: "30 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "a drop of blood",
		Duration: "Concentration, up to 1 minute",
		Description: "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
		LevelUpDescription: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
	},
	{
		SpellId: 10,
		Name: "false life",
		Level: 1,
		School: "necromancy",
		Classes: ["sorcerer", "wizard"],
		Range: "Self",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "a small amount of alcohol or distilled spirits",
		Duration: "1 hour",
		Description: "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
		LevelUpDescription: "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
	},
	{
		SpellId: 11,
		Name: "scorching ray",
		Level: 2,
		School: "evocation",
		Classes: ["sorcerer", "wizard"],
		Range: "120 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
		LevelUpDescription: "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
	},
	{
		SpellId: 12,
		Name: "dimension door",
		Level: 4,
		School: "conjuration",
		Classes: ["sorcerer", "wizard"],
		Range: "500 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: false,
		ComponentsMaterial: false,
		ComponentsMaterialExtra: undefined,
		Duration: "instantaneous",
		Description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “200 feet straight downward” or “upward to the northwest at a 45-degree angle, 300 feet. You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.",
		LevelUpDescription: undefined
	},
	{
		SpellId: 13,
		Name: "polymorph",
		Level: 4,
		School: "transmutation",
		Classes: ["bard", "druid", "sorcerer", "wizard"],
		Range: "60 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "a caterpillar cocoon",
		Duration: "Concentration, up to 1 hour",
		Description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target’s (or the target’s level, if it doesn’t have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The target’s gear melds into the new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.",
		LevelUpDescription: undefined
	},
	{
		SpellId: 14,
		Name: "Dream",
		Level: 5,
		School: "illusion",
		Classes: ["bard", "warlock", "wizard"],
		Range: "Special",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird",
		Duration: "8 hours",
		Description: "This spell shapes a creature’s dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don’t sleep, such as elves, can’t be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can’t take actions or move. If the target is asleep, the messenger appears in the target’s dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target’s dreams. You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target’s sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage. If you have a body part, lock of hair, clipping from a nail, or similar portion of the target’s body, the target makes its saving throw with disadvantage.",
		LevelUpDescription: undefined
	},

];

export {data};
