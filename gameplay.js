var enemyList = [Dragon, Wizard, Witch];
var min = 0;
var max = enemyList.length;

function createGoodie() {
	var player1Name = document.getElementById("play1").value;
	var player1 = new Human(player1Name, "good", 1, "human", 20, 10, 0);
	var nameNode = document.createTextNode(player1.name);
	document.getElementById(player1Name).appendChild(nameNode);
	var levelNode = document.createTextNode("\n" + "Lvl " + player1.level);
	document.getElementById(player1Name).appendChild(levelNode);
	var player2Name = document.getElementById("play2").value;
	var player2 = new Human(player2Name, "good", 1, "human", 20, 10, 0);
	var nameNode = document.createTextNode(player2.name);
	document.getElementById(player2Name).appendChild(nameNode);
	var levelNode = document.createTextNode("\n" + "Lvl " + player2.level);
	document.getElementById(player2Name).appendChild(levelNode);
	console.log(player1);
	console.log(player2);
	var hideInput = document.getElementsByClassName("nameinput");
	var i;
	for (i = 0; i < hideInput.length; i++) {
		hideInput[i].style.display = "none";
	}
}

function createBaddie() {
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var enemy1 = enemyList[randomNum];
	console.log(enemy1);
	window.enemy1str = String(enemy1.name);
	console.log(enemy1str);
	var newEnemy = new enemy1(enemy1str, "bad", 1, enemy1str, 5, 10);
	console.log(newEnemy);
	var enemy1Name = document.getElementById(enemy1str);
	var nameLevelNode = document.createTextNode(newEnemy.name + "\n" + "Lvl " + newEnemy.level);
	enemy1Name.appendChild(nameLevelNode);
}

function startGame() {
	var startGamePopUp = document.createElement("div");
	console.log(startGamePopUp);
	window.startGameNode = document.createTextNode("You must battle a " + enemy1str);
	console.log(startGameNode);
	startGamePopUp.className = "character";
	window.startGameID = "startPopUp";
	startGamePopUp.id = startGameID;
	console.log(startGameID);
	// Up to here
}