function forwardButton(){
    const cards = document.querySelectorAll(".card")
    
    currenCard++
    cards[currenCard].classList.add("selected")
    cards[currenCard-1].classList.remove("selected")
}

function backButton() {
    const cards = document.querySelectorAll(".card")

    currenCard--
    
    if(currenCard <= 0){
        currenCard = 0
    }
    
    cards[currenCard].classList.add("selected")
    cards[currenCard+1].classList.remove("selected")
}

let currenCard = 0