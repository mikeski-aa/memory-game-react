import { useState } from "react";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";
import "../src/styles/CardListStyle.css";
import { PlayGame } from "./components/PlayGame";
import { NewButton } from "./components/ButtonComp";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [gameOver, setGameOver] = useState([false]);

  if (gameOver === true) {
    alert("ITS OVER. YOU LOST. THATS IT GG.");
  }

  return (
    <>
      <div className="buttons">
        <NewButton
          btnClass="playBtn"
          btnAction={() => PlayGame(setCurrentPokemon)}
          btnText="Play Game!"
        />
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
