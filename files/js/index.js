function forwardButton(){
    const cards = document.querySelectorAll(".card")
    
    currenCard++

    currenCard >= 2 ? currenCard = 2 : currenCard = currenCard

    cards[currenCard].classList.add("selected")
    cards[currenCard-1].classList.remove("selected")
}

function backButton() {
    const cards = document.querySelectorAll(".card")

    currenCard--
    
    currenCard <= 0 ? currenCard = 0 : currenCard = currenCard
    
    cards[currenCard].classList.add("selected")
    cards[currenCard+1].classList.remove("selected")
}

let currenCard = 0