import { getUniqueArray } from "./RandomNumberPicker";
import { splitUrl, createImgUrl } from "./SplitURLs";

// function to call api
// this function will recieve pokemon JSON

async function fetchPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const pokemon = await response.json();

      return pokemon;
    }
  } catch (error) {
    alert("Ooops something went wrong " + error);
  }
}

// function for picking 8 pokemon
function pickPokemon(input) {
  let array = getUniqueArray();
  let tempObjectHolder = [];

  for (let x of array) {
    tempObjectHolder.push(createObject(input[x]));
  }

  console.log(tempObjectHolder);
  return tempObjectHolder;
}

// function creates a neat pokemon object to be used as state
function createObject(input) {
  const object = {
    id: splitUrl(input.url),
    name: input.name,
    picUrl: createImgUrl(splitUrl(input.url)),
  };

  return object;
}

// call async function and create new object
function logJSON() {
  fetchPokemonData().then((pokemon) => {
    pickPokemon(pokemon.results);
  });
}

export { logJSON };
