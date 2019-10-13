

function createGoodie() {
	var maxHp = 0;
	var player1Name = document.getElementById("play1").value;
	window.player1 = new Human(player1Name, "good", 1, "human", 20, 10, 0, maxHp);
	player1.hp = player1.level * 15;
	var nameNode = document.createTextNode(player1.name);
	document.getElementById(player1Name).appendChild(nameNode);
	var healthNode = document.createTextNode("\n" + "HP: " + player1.hp);
	document.getElementById(player1Name).appendChild(healthNode);
	var levelNode = document.createTextNode("\n" + "Lvl " + player1.level);
	document.getElementById(player1Name).appendChild(levelNode);
	var player2Name = document.getElementById("play2").value;
	var player2 = new Human(player2Name, "good", 1, "human", 20, 10, 0);
	player2.hp = player2.level * 15;
	var nameNode = document.createTextNode(player2.name);
	document.getElementById(player2Name).appendChild(nameNode);
	var healthNode = document.createTextNode("\n" + "HP: " + player2.hp);
	document.getElementById(player2Name).appendChild(healthNode);
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
	var enemyList = [Dragon, Wizard, Witch];
	var min = 0;
	var max = enemyList.length;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	var enemy1 = enemyList[randomNum];
	console.log(enemy1);
	window.enemy1str = String(enemy1.name);
	console.log(enemy1str);
	window.newEnemy = new enemy1(enemy1str, "bad", 1, enemy1str, 5, 10, 50);
	console.log(newEnemy);
	var enemy1Name = document.getElementById(enemy1str);

	var nameLevelNode = document.createTextNode(newEnemy.name + "\n" + "Lvl " + newEnemy.level);
	enemy1Name.appendChild(nameLevelNode);
	var healthNode = document.createTextNode("\n" + "HP: " + newEnemy.health);
	enemy1Name.appendChild(healthNode);

}

function startGame() {
	var startGamePopUp = document.createElement("div");
	var startGameNode = document.createTextNode("You must battle a " + enemy1str);
	startGamePopUp.className = "startGamePopUp";
	startGamePopUp.id = "startPopUp";

	var attackButton = document.createElement("button");
	var attackButtonNode = document.createTextNode("Attack!");
	attackButton.id = "attackButtonId";
	attackButton.onclick = attack;

	var getStartPopUp = document.getElementById("startPopUp");
	var getAttackButtonId = document.getElementById("attackButtonId");

	document.body.insertBefore(startGamePopUp, document.getElementById("play1"));
	document.getElementById("startPopUp").appendChild(startGameNode);

	document.getElementById("startPopUp").appendChild(attackButton);
	document.getElementById("attackButtonId").appendChild(attackButtonNode);
}

function attack() {
	document.getElementById("attackButtonId").style.display = "none";
	document.getElementById("startPopUp").style.display = "none";
	var player1Attack = player1.strength;
	var attackValue = player1Attack - newEnemy.defense;
	newEnemy.health = newEnemy.health - attackValue;
	var healthNode = document.createTextNode("\n" + "New HP: " + newEnemy.health);
	document.getElementById(enemy1str).appendChild(healthNode);

}	
