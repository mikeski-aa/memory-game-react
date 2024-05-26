// these functions will be responsible for retrieving relevant image URLs for pokemon

// this function will split the original URL to get the pokemon ID index
function splitUrl(inputUrl) {
  let newSplit = inputUrl
    .split("https://pokeapi.co/api/v2/pokemon/")[1]
    .split("/")[0];

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
