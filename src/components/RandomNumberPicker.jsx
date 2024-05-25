// in here, I want to generate 8 number between 0-19;

function generateRandomNumb() {
  let newNumb = Math.floor(Math.random() * (19 - 0 + 1) + 0);

  return newNumb;
}

// this function will go through the generator, picking 8 unique unumbers

function getUniqueArray() {
  let uniqueArray = [];

  for (let i = 0; i < 8; i++) {
    uniqueArray.push(generateRandomNumb());
  }

  console.log(uniqueArray);
}

export { getUniqueArray };
