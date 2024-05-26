import { useState } from "react";
import { logJSON } from "./components/PokemonAPI";
import { getUniqueArray } from "./components/RandomNumberPicker";
import { displaySearchResult } from "./components/GiphyAPI";
import { splitUrl } from "./components/GetImages";
import "./App.css";

function App() {
  const [testState, setTestState] = useState("dddd");

  function test() {
    displaySearchResult("motorbike", setTestState, testState);
    logJSON();
    splitUrl("https://pokeapi.co/api/v2/pokemon/5/");
  }

  return (
    <>
      <img src={testState}></img>
      <div className="card">
        <button onClick={() => test()}>Set state button </button>
      </div>
    </>
  );
}

export default App;
