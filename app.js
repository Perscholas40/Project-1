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
var playerHand;
// Clubs;
cardDeck[0].src = 'Images/2C.jpg';
cardDeck[1].src = 'Images/3C.jpg';
cardDeck[2].src = 'Images/4C.jpg';
cardDeck[3].src = 'Images/5C.jpg';
cardDeck[4].src = 'Images/6C.jpg';
cardDeck[5].src = 'Images/7C.jpg';
cardDeck[6].src = 'Images/8C.jpg';
cardDeck[7].src = 'Images/9C.jpg';
cardDeck[8].src = 'Images/10C.jpg';
cardDeck[9].src = 'Images/JC.jpg';
cardDeck[10].src = 'Images/QC.jpg';
cardDeck[11].src = 'Images/KC.jpg';
cardDeck[12].src = 'Images/AC.jpg';
// Diamonds
cardDeck[13].src = 'Images/2D.jpg';
cardDeck[14].src = 'Images/3D.jpg';
cardDeck[15].src = 'Images/4D.jpg';
cardDeck[16].src = 'Images/5D.jpg';
cardDeck[17].src = 'Images/6D.jpg';
cardDeck[18].src = 'Images/7D.jpg';
cardDeck[19].src = 'Images/8D.jpg';
cardDeck[20].src = 'Images/9D.jpg';
cardDeck[21].src = 'Images/10D.jpg';
cardDeck[22].src = 'Images/JD.jpg';
cardDeck[23].src = 'Images/QD.jpg';
cardDeck[24].src = 'Images/KD.jpg';
cardDeck[25].src = 'Images/AD.jpg';
// Hearts
cardDeck[26].src = 'Images/2H.jpg';
cardDeck[27].src = 'Images/3H.jpg';
cardDeck[28].src = 'Images/4H.jpg';
cardDeck[29].src = 'Images/5H.jpg';
cardDeck[30].src = 'Images/6H.jpg';
cardDeck[31].src = 'Images/7H.jpg';
cardDeck[32].src = 'Images/8H.jpg';
cardDeck[33].src = 'Images/9H.jpg';
cardDeck[34].src = 'Images/10H.jpg';
cardDeck[35].src = 'Images/JH.jpg';
cardDeck[36].src = 'Images/QH.jpg';
cardDeck[37].src = 'Images/KH.jpg';
cardDeck[38].src = 'Images/AH.jpg';
//Spades
cardDeck[39].src = 'Images/2S.jpg';
cardDeck[40].src = 'Images/3S.jpg';
cardDeck[41].src = 'Images/4S.jpg';
cardDeck[42].src = 'Images/5S.jpg';
cardDeck[43].src = 'Images/6S.jpg';
cardDeck[44].src = 'Images/7S.jpg';
cardDeck[45].src = 'Images/8S.jpg';
cardDeck[46].src = 'Images/9S.jpg';
cardDeck[47].src = 'Images/10S.jpg';
cardDeck[48].src = 'Images/JS.jpg';
cardDeck[49].src = 'Images/QS.jpg';
cardDeck[50].src = 'Images/KS.jpg';
cardDeck[51].src = 'Images/AS.jpg';



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
function hit(){
    playerHand.push(drawCard(cardDeck));
    console.log('New hand: ' + playerHand)
    if(handTotal(playerHand) > 21){
        console.log("Bust")
    }
}

// document.getElementsByClassName('btn').addEventListener("click", hit());



gameBegin();
console.log('Player Hand: ' + playerHand);
console.log('Player Hand total: ' + handTotal(playerHand))
console.log('Dealer Hand: ' + dealerHand)
console.log('Dealer Hand total: ' + handTotal(dealerHand))
// let playerHand = [];
// let dealerHand = [];
