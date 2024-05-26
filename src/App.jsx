import { useState } from "react";
import { logJSON } from "./components/PokemonAPI";
import { getUniqueArray } from "./components/RandomNumberPicker";
import { displaySearchResult } from "./components/GiphyAPI";
import { splitUrl, createImgUrl } from "./components/SplitURLs";
import { CreateGameCard } from "./components/GameCard";
import "./App.css";

function App() {
  const [testState, setTestState] = useState("dddd");
  const pok =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png";

  const testName = "Bulb";

  function test() {
    // displaySearchResult("motorbike", setTestState, testState);
    logJSON();

    setTestState(
      createImgUrl(splitUrl("https://pokeapi.co/api/v2/pokemon/2/"))
    );
  }

  return (
    <>
      <img></img>
      <div className="notCard">
        <button onClick={() => test()}>Set state button </button>
      </div>
      <CreateGameCard imageSource={pok} cardName="Bulb" />
    </>
  );
}

export default App;
