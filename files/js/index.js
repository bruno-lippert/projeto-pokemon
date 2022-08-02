function forwardButton(){
    const cards = document.querySelectorAll(".card")
    
    currenCard++
    cards[currenCard].classList.add("selected")
    cards[currenCard-1].classList.remove("selected")
}


let currenCard = 0