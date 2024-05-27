import { fetchCardsToBeUsed } from "./PokemonAPI";
// this is launched when play game button is clicked

function PlayGame(setState, setDisplay) {
  setDisplay("game");
  fetchCardsToBeUsed(setState);
}

export { PlayGame };
