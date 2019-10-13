class Character {
	constructor (name, badgood, level, health) {
		this.name = name;
		this.badgood = badgood;
		this.level = level;
		this.health = health
	}
}

class Goodie extends Character {
	constructor (name, badgood, level, type, strength, defense, exp, health) {
		super (name, badgood, level, health);
		this.type = type;
		this.strength = strength;
		this.defense = defense;
		this.exp = exp;
	}
	attack() {
		return (this.name + "hits" + enemyName + "for" + (this.strenth - enemyDefense) + "points.")
	}
}

class Baddie extends Character {
	constructor (name, badgood, level, type, strength, defense, health) {
		super (name, badgood, level, health);
		this.type = type;
		this.strength = strength;
		this.defense = defense;
	}
	attack() {
		return (this.name + "hits" + enemyName + "for" + (this.strenth - enemyDefense) + "points.")
	}
}

class Dragon extends Baddie {
	constructor (name, badgood, level, type, strength, defense, health) {
		super (name, badgood, level, type, strength, defense, health);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Witch extends Baddie {
	constructor (name, badgood, level, type, strength, defense, health) {
		super (name, badgood, level, type, strength, defense);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Wizard extends Baddie {
	constructor (name, badgood, level, type, strength, defense, health) {
		super (name, badgood, level, type, strength, defense, health);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Human extends Goodie {
	constructor (name, badgood, level, type, strength, defense, exp, health) {
		super (name, badgood, level, type, strength, defense, exp, health);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "character";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}
