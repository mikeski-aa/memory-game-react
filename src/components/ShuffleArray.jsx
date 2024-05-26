// this function is here to shuffle state array between turns / clicks
// used Fisher–Yates (aka Knuth) Shuffle for this function

function ShuffleArray(currentState) {
  let tempCopy = [...currentState];
  let currentIndex = tempCopy.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [tempCopy[currentIndex], tempCopy[randomIndex]] = [
      tempCopy[randomIndex],
      tempCopy[currentIndex],
    ];
  }

  return tempCopy;
}

export { ShuffleArray };
