console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var arena = document.getElementById('game-board');

function isMatch(twoCards)
{
	var newGame;
	if (twoCards[0] === twoCards[1])
	{
		newGame = confirm("You found a match!");
	}
	else
	{
		newGame = confirm("Sorry! Try Again");
	}
	var allCards = document.getElementsByClassName('card');
	if (newGame) // Wait for user response before resetting the game
	{
		for (var i = 0; i < allCards.length; i++)
		{
			allCards[i].innerHTML = "";
		}
	}
	
}

function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

function displayCard()
{
	var data = this.getAttribute('data-card');
	if (data === "king")
	{
		this.innerHTML = '<img src="kingspades.png" alt="King of Spades" />';
	}
	else
	{
		this.innerHTML = '<img src="queenspades.png" alt="Queen of Spades" />';
	}
}
function createBoard()
{
	for (var i = 0; i < cards.length; i++)
	{
		var newCard = document.createElement('div');
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener("click", displayCard);
		newCard.addEventListener('click', isTwoCards);
		newCard.innerHTML = "";
		arena.appendChild(newCard);
	}
	console.log("Board Created");
}

createBoard();
