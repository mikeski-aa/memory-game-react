import { useState } from "react";
import { fetchCardsToBeUsed } from "./components/PokemonAPI";
import { getUniqueArray } from "./components/RandomNumberPicker";
import { displaySearchResult } from "./components/GiphyAPI";
import { splitUrl, createImgUrl } from "./components/SplitURLs";
import { CreateGameCard } from "./components/GameCard";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";

function App() {
  const [testState, setTestState] = useState({
    id: 1,
    name: "Test",
    picUrl:
      "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/017.png",
  });
  const pok =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png";

  const testName = "Bulb";

  function test() {
    // displaySearchResult("motorbike", setTestState, testState);
    console.log(testState);
    fetchCardsToBeUsed(setTestState);
    console.log(testState);
    MapDisplayCards(testState);
  }

  return (
    <>
      <img></img>
      <div className="notCard">
        <button onClick={() => test()}>Set state button </button>
      </div>
      {/* <CreateGameCard imageSource={pok} cardName="Bulb" /> */}
    </>
  );
}

export default App;
