//declare variables and set deck
var deckCount = parseInt(prompt("How many decks would you like to use? (recommended 1~8)"));

var singleDeck = ['KC','AC','2C','3C','4C','5C','6C','7C','8C','9C','10C', 'JC','QC','KH','AH','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KD','AD','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KS','AS','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS'];

var repDeck = [];
var masterDeck = [];


for(var i = 0; i < (52 * deckCount); i++){
  masterDeck.push(i);
}

for(k = 0; k < deckCount; k ++) {
    for(j = 0; j < singleDeck.length; j ++) {
        repDeck.push(singleDeck[j]);
    }
}

//masterdeck is now set.

//dealing begins
var playerHand = [];
var playerScore;
var dealerHand = [];
var dealerScore;

var chosenIndex, chosenValue;
var pRepDeck1, pRepDeck2, dRepDeck1, dRepDeck2;

function dealCards() {

playerHand = [];
dealerHand = [];

chosenIndex = Math.floor(Math.random() * masterDeck.length);
playerHand.push(masterDeck[chosenIndex]);
masterDeck.splice(chosenIndex, 1);
pRepDeck1 = repDeck[chosenIndex];
repDeck.splice(chosenIndex, 1);

chosenIndex = Math.floor(Math.random() * masterDeck.length);
dealerHand.push(masterDeck[chosenIndex]);
masterDeck.splice(chosenIndex, 1);
dRepDeck1 = repDeck[chosenIndex];
repDeck.splice(chosenIndex, 1);


chosenIndex = Math.floor(Math.random() * masterDeck.length);
playerHand.push(masterDeck[chosenIndex]);
masterDeck.splice(chosenIndex, 1);
pRepDeck2 = repDeck[chosenIndex];
repDeck.splice(chosenIndex, 1);

chosenIndex = Math.floor(Math.random() * masterDeck.length);
dealerHand.push(masterDeck[chosenIndex]);
masterDeck.splice(chosenIndex, 1);
dRepDeck2 = repDeck[chosenIndex];
repDeck.splice(chosenIndex, 1);

console.log("player's cards: " + pRepDeck1 + " & " + pRepDeck2);
console.log("dealer's cards: " + dRepDeck1 + " & " + dRepDeck2);

var playerCard1, playerCard2, dealerCard1, dealerCard2;
var simpleV1, suitV1, numV1;
var simpleV2, suitV2, numV2;
var simpleV3, suitV3, numV3;
var simpleV4, suitV4, numV4;

  simpleV1 = playerHand[0] % 52;
  suitV1 = Math.floor(simpleV1);
  numV1 = simpleV1 % 13;
    if (numV1 == 0 || numV1 == 11 || numV1 == 12) {
      playerCard1 = 10;
    }
    else {
      playerCard1 = numV1;
    }

  simpleV2 = playerHand[1] % 52;
  suitV2 = Math.floor(simpleV2);
  numV2 = simpleV2 % 13;
    if (numV2 == 0 || numV2 == 11 || numV2 == 12) {
      playerCard2 = 10;
    }
    else {
      playerCard2 = numV2;
    }

    simpleV3 = dealerHand[0] % 52;
    suitV3 = Math.floor(simpleV3);
    numV3 = simpleV3 % 13;
    if (numV3 == 0 || numV3 == 11 || numV3 == 12) {
      dealerCard1 = 10;
    }
    else {
      dealerCard1 = numV3;
    }

    simpleV4 = dealerHand[1] % 52;
    suitV4 = Math.floor(simpleV4);
    numV4 = simpleV4 % 13;
    if (numV4 == 0 || numV4 == 11 || numV4 == 12) {
      dealerCard2 = 10;
    }
    else {
      dealerCard2 = numV4;
    }
    console.log("Your score: " + (playerCard1 + playerCard2));
    console.log("Dealer's score: " + (dealerCard1 + dealerCard2));
};
