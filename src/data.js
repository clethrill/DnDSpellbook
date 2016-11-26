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
		Name: "Sword Burst",
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
		Name: "Vicious Mockery",
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
		Name: "Bane",
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
		Name: "False Life",
		Level: 1,
		School: "necromancy",
		Classes: ["sorcerer", "wizard"],
		Range: "30 feet",
		CastingTime: "1 action",
		ComponentsVocal: true,
		ComponentsSomatic: true,
		ComponentsMaterial: true,
		ComponentsMaterialExtra: "a small amount of alcohol or distilled spirits",
		Duration: "Concentration, up to 1 minute",
		Description: "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
		LevelUpDescription: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
	},

];

export {data};
