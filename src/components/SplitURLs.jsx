// these functions will be responsible for retrieving relevant image URLs for pokemon

// this function will split the original URL to get the pokemon ID index
function splitUrl(inputUrl) {
  let newSplit = inputUrl
    .split("https://pokeapi.co/api/v2/pokemon/")[1]
    .split("/")[0];

  // in order to get the correct image, the number value requires 3 digits.
  // hence, a number less than 10 needs two zero prefixes and less than 100 needs 1 zero prefix
  if (newSplit.length === 1) {
    newSplit = "00" + newSplit;
  } else if (newSplit.length === 2) {
    newSplit = "0" + newSplit;
  }
  console.log(newSplit);
  return newSplit;
}

// this function takes newly created index and uses it to create relevant image url
function createImgUrl(pokemonIndex) {
  let imageUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemonIndex}.png`;

  return imageUrl;
}

export { createImgUrl, splitUrl };
