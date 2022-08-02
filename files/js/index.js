function forwardButton(){
    getElementByClassNameCard()
    if (currenCard >= cards.length -1) return //faz com que quando chegue no último cartão o programa pare, pois não tem mais cartas posteriores
    
    currenCard++

    hideSelectedCard()
    addClassToCurrentCard()
}

function backButton() {
    getElementByClassNameCard()
    if (currenCard === 0) return //faz com que quando chegue no primeiro cartão o programa pare, pois não tem mais cartas anteriores
    
    currenCard--
    
    hideSelectedCard()
    addClassToCurrentCard()
}

function hideSelectedCard() {
    const selectedCard = document.querySelector(".selected")
    selectedCard.classList.remove("selected")
}

function addClassToCurrentCard() {
    cards[currenCard].classList.add("selected")
}

function getElementByClassNameCard(){
    cards = document.querySelectorAll(".card")
}

let cards
let currenCard = 0