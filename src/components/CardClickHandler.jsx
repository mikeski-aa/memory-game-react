import { ShuffleArray } from "./ShuffleArray";
import { PlayGame } from "./PlayGame";

// function to handle clicking the card
// clicking a card should change the prevSelected from false to true.
// if true is clicked, game over.

function CardClickHandler(
  selectStatus,
  id,
  currentState,
  setStatus,
  setScore,
  currScore,
  cardState,
  setDisplay
) {
  if (selectStatus === true) {
    alert(`Game over! You got ${currScore} / 8 right!`);
    PlayGame(cardState, setDisplay);
    setScore(0);
    return;
  }

  let copyOfState = [...currentState];

  for (let i = 0; i < copyOfState.length; i++) {
    if (copyOfState[i].id === id) {
      copyOfState[i] = {
        ...copyOfState[i],
        prevSelected: true,
      };
    }
  }

  let temp = currScore;
  temp += 1;
  setScore(temp);
  setStatus(ShuffleArray(copyOfState));
}

export { CardClickHandler };
