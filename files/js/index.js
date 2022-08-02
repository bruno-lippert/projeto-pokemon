function forwardButton(){
    const cards = document.querySelectorAll(".card")
    if (currenCard >= cards.length -1) return //faz com que quando chegue no último cartão o programa pare, pois não tem mais cartas posteriores
    
    currenCard++

    cards[currenCard].classList.add("selected")
    cards[currenCard-1].classList.remove("selected")
}

function backButton() {
    const cards = document.querySelectorAll(".card")
    if (currenCard === 0) return //faz com que quando chegue no primeiro cartão o programa pare, pois não tem mais cartas anteriores
    
    currenCard--
    
    cards[currenCard].classList.add("selected")
    cards[currenCard+1].classList.remove("selected")
}

let currenCard = 0