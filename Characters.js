class Character {
	constructor (name, badgood, level, maxHP) {
		this.name = name;
		this.badgood = badgood;
		this.level = level;
		this.maxHP = maxHP
	}
}

var i = 1;

class Player extends Character {
	constructor (name, badgood, level, type, strength, defense, exp, maxHP, alive) {
		super (name, badgood, level, maxHP);
		this.type = type;
		this.strength = strength;
		this.defense = defense;
		this.exp = exp;
		this.alive = alive;	
	}
	//attack() {
	//	return (this.name + "hits" + enemyName + "for" + (this.strenth - enemyDefense) + "points.")
	//}

	attack2() {
		document.getElementById("gameContainer").style.visibility = "hidden";
		var currentPlayerAttack = currentPlayer.strength;
		var attackValue = currentPlayerAttack - newEnemy.defense;
		if (attackValue > 0) {
			newEnemy.maxHP = newEnemy.maxHP - attackValue;}
		var maxHPText = document.createTextNode("\n" + "HP: " + newEnemy.maxHP);
		var getBaddie = document.getElementById(enemy1str);
		document.getElementById(enemy1str).replaceChild(maxHPText, getBaddie.childNodes[1]);
		setTimeout(newEnemy.enemyAttack, 500);
		currentPlayer.exp += attackValue;

		var getGameLog = document.getElementById("gameLog");

	
		var gameLogListItem = document.createElement("li");
		var id = "gameLogListItem" + i;
		gameLogListItem.id = id;
		var idminus1 = "gameLogListItem" + (i - 1);

		var playerAttackText = document.createTextNode(currentPlayer.name + " hits the " + enemy1str + 
				" for " + attackValue + " points." );

		getGameLog.insertBefore(gameLogListItem, document.getElementById(idminus1));
		gameLogListItem.appendChild(playerAttackText);
		//getStartPopUp.removeChild(getStartPopUp.childNodes[1])
		i++;
		updateGameLog();
		console.log(currentPlayer.exp);
	}	

	heal() {
		document.getElementById("gameContainer").style.visibility = "hidden";
		var healValue = currentPlayer.level + currentPlayer.level;
		currentPlayer.maxHP = currentPlayer.maxHP + healValue;
		var maxHPText = document.createTextNode("\n" + "HP: " + currentPlayer.maxHP);
		var getPlayer = document.getElementById("player1Icon");
		document.getElementById("player1Icon").replaceChild(maxHPText, getPlayer.childNodes[1]);
		setTimeout(newEnemy.enemyAttack, 500);
		console.log("Heal");
		updateGameLog();
	}
	checkPlayerHealth() {
		var attackedPlayerCurrentHealth = attackedPlayer.maxHP;
		if (attackedPlayerCurrentHealth <= 0) {
	
			var getGameLog = document.getElementById("gameLog");
			var playerHasDiedListItem = document.createElement("li");
			var id = "gameLogListItem" + i;
			playerHasDiedListItem.id = id;
			var idminus1 = "gameLogListItem" + (i - 1);
			var playerHasDiedText = document.createTextNode(attackedPlayer.name + " has died.");
			getGameLog.insertBefore(playerHasDiedListItem, document.getElementById(idminus1));
			playerHasDiedListItem.appendChild(playerHasDiedText);
			attackedPlayer.alive = "dead";
		}
	}
}


class Baddie extends Character {
	constructor (name, badgood, level, type, strength, defense, maxHP) {
		super (name, badgood, level, maxHP);
		this.type = type;
		this.strength = strength;
		this.defense = defense;
	}
	//attack() {
	//	return (this.name + "hits" + enemyName + "for" + (this.strenth - enemyDefense) + "points.")
	//}
	enemyAttack() {
		var player1List = [player1, "player1"];
		var player2List = [player2, "player2"];
		var playerList = [player1List, player2List];
		var min = 0;
		var max = playerList.length;
		var randomNum = Math.floor(Math.random() * (max - min)) + min;
		var attackedPlayerList = playerList[randomNum];
		window.attackedPlayer = attackedPlayerList[0];

		if (attackedPlayer.alive === "alive") {

			var enemyAttack = newEnemy.strength;
			var attackValue = enemyAttack - attackedPlayer.defense;
			if (attackValue > 0) {
				if ((attackedPlayer.maxHP - attackValue) >= 0) {
					attackedPlayer.maxHP = attackedPlayer.maxHP - attackValue; 
					} else {
						attackedPlayer.maxHP = 0;
					}
				}
			
			var maxHPText = document.createTextNode("\n" + "HP: " + attackedPlayer.maxHP);

			var getPlayerDiv = document.getElementById(attackedPlayerList[1] + "Icon");
			getPlayerDiv.replaceChild(maxHPText, getPlayerDiv.childNodes[1]);


			var getGameLog = document.getElementById("gameLog");

			
			var enemyAttackListItem = document.createElement("li");
			var id = "gameLogListItem" + i;
			enemyAttackListItem.id = id;
			var idminus1 = "gameLogListItem" + (i - 1);

			var startGameNode = document.createTextNode("The " + enemy1str + " hits " + 
				attackedPlayer.name + " for " + attackValue + " points." );

			getGameLog.insertBefore(enemyAttackListItem, document.getElementById(idminus1));
			enemyAttackListItem.appendChild(startGameNode);
			//getStartPopUp.removeChild(getStartPopUp.childNodes[1])
			i++;
			document.getElementById("gameContainer").style.visibility = "visible";
			updateGameLog();
			attackedPlayer.checkPlayerHealth();
			alternatePlayerTurn()			
		} else {
			newEnemy.enemyAttack();

			}
	}
}

class Dragon extends Baddie {
	constructor (name, badgood, level, type, strength, defense, maxHP) {
		super (name, badgood, level, type, strength, defense, maxHP);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Witch extends Baddie {
	constructor (name, badgood, level, type, strength, defense, maxHP) {
		super (name, badgood, level, type, strength, defense, maxHP);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Wizard extends Baddie {
	constructor (name, badgood, level, type, strength, defense, maxHP) {
		super (name, badgood, level, type, strength, defense, maxHP);
		var charName = this.name;
		var characterbox = document.createElement("div");
		characterbox.className = "baddie";
		characterbox.id = charName;
		var otherChar = document.getElementById("neil");
		document.body.insertBefore(characterbox, otherChar);
	}
}

class Human extends Player {
	constructor (name, badgood, level, type, strength, defense, exp, maxHP, alive) {
		super (name, badgood, level, type, strength, defense, exp, maxHP, alive);
	}
}
