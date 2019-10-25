var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var a = 1; 
var b = a/2;
var c = b/2;
var playerStrength = level[0] * Math.round(a + b + c);

var d = 1; 
var e = d/2;
var f = d/2;
var playerDefense = level[0] * Math.round(d + e + f);



function createPlayer() {
	var maxHp = 0;

	window.player1 = document.getElementById("play1").value;
	window.player2 = document.getElementById("play2").value;

	var playerList = [player1, player2];
	for (p = 0; p < playerList.length; p++) {
		var playerListCycle = playerList[p];
		playerListCycle.maxHP = playerListCycle.level * 15;
	
}
	player1 = new Human(player1, "good", level[0], "human", playerStrength, playerDefense, 0, maxHp);
	player2 = new Human(player2, "good", level[0], "human", playerStrength, playerDefense, 0, maxHp);

	var getPlayerDiv = document.getElementById("N");
	var createPlayerDetailNode = document.createTextNode(player1.name + "\n" + "HP: " + player1.maxHP + "\n" + "Lvl " + player1.level);	
	getPlayerDiv.appendChild(createPlayerDetailNode);

	
	var hideInput = document.getElementsByClassName("nameinput");
	var i;
	for (i = 0; i < hideInput.length; i++) {
		hideInput[i].style.display = "none";
	}
}

/*
function createPlayer() {
	var maxHp = 0;
	var player1Name = document.getElementById("play1").value;
	window.player1 = new Human(player1Name, "good", 1, "human", 20, 10, 0, maxHp);
	player1.hp = player1.level * 15;
	var nameNode = document.createTextNode(player1.name);
	document.getElementById(player1Name).appendChild(nameNode);
	var maxHPNode = document.createTextNode("\n" + "HP: " + player1.hp);
	document.getElementById(player1Name).appendChild(maxHPNode);
	var levelNode = document.createTextNode("\n" + "Lvl " + player1.level);
	document.getElementById(player1Name).appendChild(levelNode);
	var player2Name = document.getElementById("play2").value;
	var player2 = new Human(player2Name, "good", 1, "human", 20, 10, 0);
	player2.hp = player2.level * 15;
	var nameNode = document.createTextNode(player2.name);
	document.getElementById(player2Name).appendChild(nameNode);
	var maxHPNode = document.createTextNode("\n" + "HP: " + player2.hp);
	document.getElementById(player2Name).appendChild(maxHPNode);
	var levelNode = document.createTextNode("\n" + "Lvl " + player2.level);
	document.getElementById(player2Name).appendChild(levelNode);
	var hideInput = document.getElementsByClassName("nameinput");
	var i;
	for (i = 0; i < hideInput.length; i++) {
		hideInput[i].style.display = "none";
	}
}
*/

function createBaddie() {
	var enemyList = [Dragon, Wizard, Witch];
	var min = 0;
	var max = enemyList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var enemy1 = enemyList[randomNum];
	window.enemy1str = String(enemy1.name);
	window.newEnemy = new enemy1(enemy1str, "bad", 1, enemy1str, 10, 10, 50);
	var enemy1Name = document.getElementById(enemy1str);

	var nameLevelNode = document.createTextNode(newEnemy.name + "\n" + "Lvl " + newEnemy.level);
	enemy1Name.appendChild(nameLevelNode);
	var maxHPNode = document.createTextNode("\n" + "HP: " + newEnemy.maxHP);
	enemy1Name.appendChild(maxHPNode);
}

function startGame() {
	
	var characterbox = document.createElement("div");
	characterbox.className = "character";
	characterbox.id = player1;
	document.body.appendChild(characterbox);


	var startGamePopUp = document.createElement("div");
	var startGameNode = document.createTextNode("You must battle a " + enemy1str);
	startGamePopUp.className = "startGamePopUp";
	startGamePopUp.id = "startPopUp";

	var attackButton = document.createElement("button");
	var attackButtonNode = document.createTextNode("Attack!");
	attackButton.id = "attackButtonId";
	attackButton.onclick = player1.attack;

	var getStartPopUp = document.getElementById("startPopUp");
	var getAttackButtonId = document.getElementById("attackButtonId");

	document.body.insertBefore(startGamePopUp, document.getElementById("play1"));
	document.getElementById("startPopUp").appendChild(startGameNode);

	document.getElementById("startPopUp").appendChild(attackButton);
	document.getElementById("attackButtonId").appendChild(attackButtonNode);

	var healButton = document.createElement("button");
	healButton.id = "healButton"
	healButton.onclick = player1.heal;
	var healNode = document.createTextNode("Heal");
	document.body.insertBefore(healButton, document.getElementById("startPopUp"));
	document.getElementById("healButton").appendChild(healNode);

	//updateTurnName();
}

/* function attack() {
	document.getElementById("attackButtonId").style.display = "none";
	document.getElementById("startPopUp").style.display = "none";
	var player1Attack = player1.strength;
	var attackValue = player1Attack - newEnemy.defense;
	newEnemy.maxHP = newEnemy.maxHP - attackValue;
	var maxHPNode = document.createTextNode("\n" + "HP: " + newEnemy.maxHP);
	var getBaddie = document.getElementById(enemy1str);
	document.getElementById(enemy1str).replaceChild(maxHPNode, getBaddie.childNodes[1]);
	setTimeout(enemyAttack, 500);
} */

/* function updateTurnName() {
	var playerNameArray = [player1Name, player2Name];
	var i = 0;
	for (i = 0; i < playerNameArray.length; i++) {
	}

	if (i === 2) {
		i = 0;
	}

	var whoseTurn = document.createTextNode(" It's " + playerNameArray[i] + "'s turn." );
	document.getElementById("startPopUp").appendChild(whoseTurn);
} */

function enemyAttack() {
	var playerList = [player1.name, player2.name];
	var min = 0;
	var max = playerList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var attackedPlayer = playerList[randomNum];
	console.log(playerList);

	var enemyAttack = newEnemy.strength;
	var attackValue = enemyAttack - player1.defense;
	attackedPlayer.maxHP = attackedPlayer.maxHP - attackValue;
	var maxHPNode = document.createTextNode("\n" + "HP: " + attackedPlayer.maxHP);
	console.log(attackedPlayer);

	var getPlayer = document.getElementById(attackedPlayer);
	document.getElementById(attackedPlayer).replaceChild(maxHPNode, getPlayer.childNodes[1]);
	var getStartPopUp = document.getElementById("startPopUp");
	
	var startGameNode = document.createTextNode("The " + enemy1str + " hits " + 
		attackedPlayer + " for " + attackValue + " points." );
	var getStartPopUp = document.getElementById("startPopUp");
	getStartPopUp.replaceChild(startGameNode, getStartPopUp.childNodes[0]);
	getStartPopUp.removeChild(getStartPopUp.childNodes[1])
	getStartPopUp.style.display = "";
	//updateTurnName();
}

/* function heal() {
	var healValue = player1.level + player1.level;
	player1.maxHP = player1.maxHP + healValue;
	var maxHPNode = document.createTextNode("\n" + "HP: " + player1.maxHP);
	var getPlayer = document.getElementById(player1.name);
	document.getElementById(player1.name).replaceChild(maxHPNode, getPlayer.childNodes[1]);
	console.log(1);
} */
