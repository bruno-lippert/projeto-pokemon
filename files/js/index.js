function forwardButton(){
    const cards = document.querySelectorAll(".card")
    let currenCard = 0

    currenCard++
    cards[currenCard].classList.add("selected")
    cards[currenCard-1].classList.remove("selected")
}