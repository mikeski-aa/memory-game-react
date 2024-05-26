import { useState } from "react";
import { fetchCardsToBeUsed } from "./components/PokemonAPI";
import { CreateGameCard } from "./components/GameCard";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";
import "../src/styles/CardListStyle.css";

function App() {
  const [testState, setTestState] = useState([]);

  const pok =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png";
  const por =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png";

  function test() {
    fetchCardsToBeUsed(setTestState);
  }

  return (
    <>
      <img></img>
      <div className="notCard">
        <button onClick={() => test()}>Play game!</button>
      </div>
      <MapDisplayCards currentState={testState} />
    </>
  );
}

export default App;
