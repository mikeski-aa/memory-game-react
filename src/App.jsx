import { useState } from "react";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";
import "../src/styles/CardListStyle.css";
import { PlayGame } from "./components/PlayGame";
import { NewButton } from "./components/ButtonComp";
import { GameSettings } from "./components/ModalSettings";
import { toggleSettingsModal } from "./components/ToggleSettingsModal";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [gameOver, setGameOver] = useState([false]);
  const [settingsModal, setSettingsModal] = useState("hide");
  const [cardDisplay, setCardDisplay] = useState("8");
  const [currentScore, setCurrentScore] = useState(0);

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
        {/* <NewButton btnClass="howToPlay" btnText="How to play" />
        <NewButton
          btnClass="settingsBtn"
          btnText="Settings"
          btnAction={() => toggleSettingsModal(settingsModal, setSettingsModal)}
        /> */}
      </div>
      <div className="score">{currentScore}</div>
      <MapDisplayCards
        currentState={currentPokemon}
        setCurrState={setCurrentPokemon}
        setGameStatus={setGameOver}
      />
      {/* <div className="modal">
        <GameSettings
          currentValue={cardDisplay}
          displayModal={settingsModal}
          setCardValue={setCardDisplay}
          setModal={setSettingsModal}
          currModal={settingsModal}
        />
      </div> */}
    </>
  );
}

export default App;
