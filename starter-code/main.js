console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var arena = document.getElementById('game-board');


function createBoard()
{
	for (var i = 0; i < 4; i++)
	{
		var newCard = document.createElement('div');
		newCard.className = "card";
		arena.addElement(newCard);
	}
}

createBoard();