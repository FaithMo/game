const cards = global.window.querySelectorAll(".tiles");
//const cards = document.querySelectorAll(".tiles");
let firstCard,
  secondCard,
  hasFlipped = false;

(shuffleTiles = () => {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
  return true;
})(); //executed immediately after its definition

let tilesLocked = false; //locks tiles when there is two flipped cards.

//master function
function turnOver() {
  if (tilesLocked) return; //will hinder cards flipping before the cards are hidden
  this.classList.toggle("flip"); //if class is available - remove it. if not add it.
  if (!hasFlipped) {
    //on the first click
    hasFlipped = true;
    firstCard = this;
  } else {
    //on the second click
    hasFlipped = false;
    secondCard = this;

    cardsMatching();
  }
}
cards.forEach(tile => tile.addEventListener("click", turnOver));

cardsMatching = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener("click", turnOver);
    secondCard.removeEventListener("click", turnOver);
  } else {
    tilesLocked = true; //do not allow to flip other tiles
  
    setTimeout(() => {
      //not a match...flip back to original.
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      tilesLocked = false; //allow to flip other tiles
    }, 500);
  }
};

module.exports = cardsMatching;
module.exports = turnOver;
module.exports = shuffleTiles;
