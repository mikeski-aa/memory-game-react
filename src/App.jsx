import { useState } from "react";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";
import "../src/styles/CardListStyle.css";
import { PlayGame } from "./components/PlayGame";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [gameOver, setGameOver] = useState([false]);

  if (gameOver === true) {
    alert("ITS OVER. YOU LOST. THATS IT GG.");
  }

  return (
    <>
      <img></img>
      <div className="notCard">
        <button onClick={() => PlayGame(setCurrentPokemon)}>Play game!</button>
      </div>
      <MapDisplayCards
        currentState={currentPokemon}
        setCurrState={setCurrentPokemon}
        setGameStatus={setGameOver}
      />
    </>
  );
}

export default App;
