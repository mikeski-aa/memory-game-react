// function to call api

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

function logJSON() {
  fetchPokemonData().then((pokemon) => {
    console.log(pokemon);
  });
}

export { logJSON };
