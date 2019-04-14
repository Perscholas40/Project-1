// Instructions Modal

// document.getElementById('.titleBox').addEventListener("click",
// function(){
//     document.querySelector('.bg-modal').style.display = 'flex';
// });
// document.querySelector(".close").addEventListener("click", function() {
//     document.querySelector('.bg-modal').style.display = 'none';
// })


//Card Deck & Variables

var cardDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,]
let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
var playerHand;
var dealerHand;

// console.log(cardDeck[0], cardDeck[52])

// Grabs random cards from card deck array
function drawCard(cardDeck){
    let randomCards = Math.floor(cardDeck.length * Math.random());
    return cardDeck[randomCards];
}
//Makes beginning hand for dealer and player
function gameBegin(){
    playerHand = [drawCard(cardDeck), drawCard(cardDeck)]
    dealerHand = [drawCard(cardDeck), drawCard(cardDeck)]
}

// Gets Value of current hand
function handTotal(hand){
    var total = 0;
    for(var i = 0; i < hand.length; i++){
        total = total + hand[i];
    }
    return total;
}

// Hit function
// function hit(){
//     playerHand.push(drawCard(cardDeck));
//     console.log('New hand: ' + playerHand)
//     if(handTotal(playerHand) > 21){
//         console.log("Bust")
//     }
// }

// document.getElementsByClassName('btn').addEventListener("click", hit());



gameBegin();
console.log('Player Hand: ' + playerHand);
console.log('Player Hand total: ' + handTotal(playerHand))
console.log('Dealer Hand: ' + dealerHand)
console.log('Dealer Hand total: ' + handTotal(dealerHand))
// let playerHand = [];
// let dealerHand = [];
