// function to handle clicking the card
// clicking a card should change the prevSelected from false to true.
// if true is clicked, game over.

function CardClickHandler(
  selectStatus,
  id,
  currentState,
  setStatus,
  setGameStatus
) {
  if (selectStatus === true) {
    console.log("you clicked this already");
    setGameStatus(true);
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

  setStatus(copyOfState);
}

export { CardClickHandler };
