import { fetchCardsToBeUsed } from "./PokemonAPI";
// this is launched when play game button is clicked

function PlayGame(setState) {
  fetchCardsToBeUsed(setState);
}

export { PlayGame };
