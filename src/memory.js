class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
    if (!cards) return undefined
    let len = cards.length;
    let x;
    for (x = len - 1; x > 0; x--) {
      var y = Math.floor(Math.random() * cards.length)
      var temp = cards[x]
      cards[x] = cards[y]
      cards[y] = temp
    }
    return cards
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    let scorePairsClicked = document.querySelector("#pairs-clicked")
    scorePairsClicked.innerHTML = this.pairsClicked
    let status = card1.innerHTML === card2.innerHTML
    console.log(status)
    if (!status) {
      let interval = setInterval(() => {
        card1.classList.remove("turned")
        card2.classList.remove("turned")
        clearInterval(interval)
      }, 800)
    }
    if (status) {
      this.pairsGuessed += 1
      let scorePairsGuessed = document.querySelector("#pairs-guessed")
      scorePairsGuessed.innerHTML = this.pairsGuessed
      
      
    } return status
    // ... write your code here
  }


  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true
    return false
    // ... write your code here
  }
}
