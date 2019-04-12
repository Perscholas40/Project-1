// Instructions Modal

// document.getElementById('.titleBox').addEventListener("click",
// function(){
//     document.querySelector('.bg-modal').style.display = 'flex';
// });
// document.querySelector(".close").addEventListener("click", function() {
//     document.querySelector('.bg-modal').style.display = 'none';
// })


//Card Deck

var cardDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,
                2,3,4,5,6,7,8,9,10,10,10,10,11,]

// console.log(cardDeck[0], cardDeck[52])

function drawCard(cardDeck){
    let randomCards = Math.floor(cardDeck.length * Math.random());
    return cardDeck[randomCards];
}

function gameBegin(){
    playerHand = [drawCard(cardDeck), drawCard(cardDeck)]
    dealerHand = [drawCard(cardDeck), drawCard(cardDeck)]
}
gameBegin();
console.log('Player Hand: ' + playerHand);
console.log('Dealer Hand: ' + dealerHand)
// let playerHand = [];
// let dealerHand = [];
console.log(drawCard(cardDeck));