var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var CardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User Flipped Queen");

var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User Flipped King");

var didYouWin = (cardsInPlay.length === 2) && (cardsInPlay[0]) === (cardsInPlay[1]) ? alert("You found a match!") : alert("Sorry, try again.")



