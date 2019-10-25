//create character stats based on level
//create character icons from input
//create enemy icons from random
//create popup
//create attack button
//create heal button
//perform action
//update display after action including earned exp
//enemy attack random character
//loop to popup
//level up on exp 
//stats increase on lvl up
//enemy killed
//new enemy chosen and based on player level
var maxHp = 0;
var level = [1, 2, 3, 4, 5, 6, 7 ,8, 9];
var l = 0
var currentLevel = level[l];

function buildGame() {
	playerStrengthCalc();
	playerDefenseCalc();
	playerMaxHpCalc();
	createPlayers();
	createPlayerIcons();
	enemyStrengthCalc();
	enemyDefenseCalc();
	enemyMaxHpCalc();
	createEnemy();
	createEnemyIcons();
	createContainer();
	createAttackButton();
	createHealButton();
}

function playerStrengthCalc() {
	window.playerStrength = currentLevel + (currentLevel * 5);
}

function playerDefenseCalc() {
	window.playerDefense = currentLevel + (currentLevel * 2);
}

function playerMaxHpCalc() {
	window.playerMaxHp = currentLevel + (currentLevel * 10);
}

function createPlayers() {
	var player1Name = document.getElementById("player1Input").value;
	var player2Name = document.getElementById("player2Input").value;

	window.player1 = 
	new Human(player1Name, "good", currentLevel, "human", playerStrength, playerDefense, 0, playerMaxHp);
	window.player2 = 
	new Human(player2Name, "good", currentLevel, "human", playerStrength, playerDefense, 0, playerMaxHp);

	window.playerList = [player1, player2];
	window.p = 0;
	window.currentPlayer = playerList[p];
}

function createPlayerIcons() {
	var player1Icon = document.createElement("div");
	player1Icon.className = "character";
	player1Icon.id = "player1Icon";

	document.body.appendChild(player1Icon);

	var getPlayerDiv = document.getElementById("player1Icon");
	var createPlayerNameText = document.createTextNode(player1.name);	
	getPlayerDiv.appendChild(createPlayerNameText);
	var createPlayerHPText = document.createTextNode("\n" + "HP: " + player1.maxHP);
	getPlayerDiv.appendChild(createPlayerHPText);
	var createPlayerLevelText = document.createTextNode("\n" + "Lvl " + player1.level);
	getPlayerDiv.appendChild(createPlayerLevelText);

	var player2Icon = document.createElement("div");
	player2Icon.className = "character";
	player2Icon.id = "player2Icon";

	document.body.appendChild(player2Icon);

	var getPlayerDiv = document.getElementById("player2Icon");
	var createPlayerNameText = document.createTextNode(player2.name);	
	getPlayerDiv.appendChild(createPlayerNameText);
	var createPlayerHPText = document.createTextNode("\n" + "HP: " + player2.maxHP);
	getPlayerDiv.appendChild(createPlayerHPText);
	var createPlayerLevelText = document.createTextNode("\n" + "Lvl " + player2.level);
	getPlayerDiv.appendChild(createPlayerLevelText);
}

function enemyStrengthCalc() {
	window.enemyStrength = currentLevel + (currentLevel * 5);
}

function enemyDefenseCalc() {
	window.enemyDefense = currentLevel + (currentLevel * 3);
}

function enemyMaxHpCalc() {
	window.enemyMaxHp = currentLevel + (currentLevel * 15);
}

function createEnemy() {
	var enemyList = [Dragon, Wizard, Witch];
	var min = 0;
	var max = enemyList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;

	var enemy1 = enemyList[randomNum];
	window.enemy1str = String(enemy1.name);
	window.newEnemy = new enemy1(enemy1str, "bad", 1, enemy1str, enemyStrength, enemyDefense, enemyMaxHp);
}

function createEnemyIcons() {
	var enemy1Name = document.getElementById(enemy1str);

	var nameLevelText = document.createTextNode(newEnemy.name + "\n" + "Lvl " + newEnemy.level);
	enemy1Name.appendChild(nameLevelText);
	var maxHPText = document.createTextNode("\n" + "HP: " + newEnemy.maxHP);
	enemy1Name.appendChild(maxHPText);
}

function createContainer() {
	document.getElementById("nameinput").style.display = "none";

	var gameContainer = document.createElement("div");
	gameContainer.className = "container";
	gameContainer.id = "gameContainer";
	document.body.appendChild(gameContainer);

	var dispCurrentPlayerText = document.createTextNode("It's " + currentPlayer.name + "'s turn.");
	gameContainer.appendChild(dispCurrentPlayerText);

	var gameLogContainer = document.createElement("div");
	gameLogContainer.className = "log";
	gameLogContainer.id = "gameLogContainer";
	gameContainer.appendChild(gameLogContainer);

	var gameLog = document.createElement("ol");
	gameLog.id = "gameLog";
	gameLog.reversed = "reversed";
	gameLogContainer.appendChild(gameLog);

	var gameLogListItem = document.createElement("li");
	gameLogListItem.id = "gameLogListItem" + 0;
	gameLog.appendChild(gameLogListItem);

	window.startGameText = document.createTextNode("You must battle a " + enemy1str);
	gameLogListItem.appendChild(startGameText);

}

function createAttackButton() {
	var attackButton = document.createElement("button");
	var attackButtonText = document.createTextNode("Attack!");
	attackButton.id = "attackButtonId";
	attackButton.onclick = player1.attack2;

	var getStartPopUp = document.getElementById("gameContainer");

	getStartPopUp.appendChild(attackButton);
	attackButton.appendChild(attackButtonText);
}

function createHealButton() {
	var healButton = document.createElement("button");
	var healButtonText = document.createTextNode("Heal");
	healButton.id = "healButtonId";
	healButton.onclick = player1.heal;

	var getStartPopUp = document.getElementById("gameContainer");

	getStartPopUp.appendChild(healButton);
	healButton.appendChild(healButtonText);

}

function updateEnemyStats() {

}

/*function enemyAttack() {
	var playerList = [player1, player2];
	var min = 0;
	var max = playerList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var attackedPlayer = playerList[randomNum];

	var enemyAttack = newEnemy.strength;
	var attackValue = enemyAttack - attackedPlayer.defense;
	attackedPlayer.maxHP = attackedPlayer.maxHP - attackValue;
	var maxHPText = document.createTextNode("\n" + "HP: " + attackedPlayer.maxHP);
	console.log(attackedPlayer);
*/
/* function enemyAttack() {
	var player1List = [player1, "player1"];
	var player2List = [player2, "player2"];
	var playerList = [player1List, player2List];
	var min = 0;
	var max = playerList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var attackedPlayerList = playerList[randomNum];
	var attackedPlayer = attackedPlayerList[0];

	var enemyAttack = newEnemy.strength;
	var attackValue = enemyAttack - attackedPlayer.defense;
	attackedPlayer.maxHP = attackedPlayer.maxHP - attackValue;
	var maxHPText = document.createTextNode("\n" + "HP: " + attackedPlayer.maxHP);

	var getPlayerDiv = document.getElementById(attackedPlayerList[1] + "Icon");
	getPlayerDiv.replaceChild(maxHPText, getPlayerDiv.childNodes[1]);
	var getStartPopUp = document.getElementById("startPopUp");
	
	var startGameNode = document.createTextNode("The " + enemy1str + " hits " + 
		attackedPlayer.name + " for " + attackValue + " points." );
	var getStartPopUp = document.getElementById("startPopUp");
	getStartPopUp.replaceChild(startGameNode, getStartPopUp.childNodes[0]);
	getStartPopUp.removeChild(getStartPopUp.childNodes[1])
	getStartPopUp.style.display = "";

} */

function alternatePlayerTurn() {
	if (p == 0) {
		p = 1} else {
		p = 0
	}
	currentPlayer = playerList[p];

	var getNodes = document.getElementById("gameContainer").childNodes;
	var dispCurrentPlayerText = document.createTextNode("It's " + currentPlayer.name + "'s turn.");
	gameContainer.replaceChild(dispCurrentPlayerText, getNodes[0]);
}

function updateGameLog() {
	var gameLogNodes = document.getElementById("gameLog").childNodes;
	if (gameLogNodes.length > 10) {
		document.getElementById("gameLog").removeChild(gameLogNodes[gameLogNodes.length - 1]);

	}
}