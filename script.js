let firstCard = 10;
let secondCard = 4;
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardBtn = document.querySelectorAll("button")[1];

cardsEl.textContent = "Cards: "

function startGame(){
    renderGame();
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
    newCardBtn.removeAttribute('disabled');
}

function newCard(){
    let newCard = Math.ceil(Math.random() * 9);
    sum += newCard;
    cardsEl.textContent += newCard + "  ";
    sumEl.textContent = "Sum: " + sum;
    renderGame();
}
