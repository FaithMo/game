const cards = document.querySelectorAll(".tiles");
let firstCard,
  secondCard,
  hasFlipped = false,


(shuffleTiles = () => {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
})(); //executed immediately after its definition

let tilesLocked = false; //locks tiles when there is two flipped cards.
//master function
function flipCard() {
  if (tilesLocked) return; //when no tiles are open
  
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
cards.forEach(card => card.addEventListener("click", flipCard));

cardsMatching = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {
    cardsNotMatching();
  }
};

cardsNotMatching = () => {
  tilesLocked = true; //do not allow to flip other tiles
  setTimeout(() => {
    //not a match...flip back to original.
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    tilesLocked = false; //allow to flip other tiles
  }, 500);
};
