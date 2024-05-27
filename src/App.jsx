import { useEffect, useState } from "react";
import { MapDisplayCards } from "./components/MapCards";
import "./App.css";
import "../src/styles/CardListStyle.css";
import { PlayGame } from "./components/PlayGame";
import { NewButton } from "./components/ButtonComp";
import "../src/styles/AppStyle.css";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [displayStatus, setDisplayStatus] = useState("ini");
  const [bestScore, setBestScore] = useState(0);

  // use effect is needed here to update the value of a mounted component
  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  });

  return (
    <>
      <div className="main">
        <div className={`buttons ${displayStatus}`}>
          <NewButton
            btnClass="playBtn"
            btnAction={() => PlayGame(setCurrentPokemon, setDisplayStatus)}
            btnText="Play Game!"
          />
        </div>
        <div className={`howToPlay ${displayStatus}`}>
          How to play: Memorise the cards. Click only the cards you have not
          previously selected!
        </div>
        <div
          className={`score ${displayStatus}`}
        >{`Your score is: ${currentScore}`}</div>
        <div
          className={`bestScore ${displayStatus}`}
        >{`Best score: ${bestScore}`}</div>
        <MapDisplayCards
          currentState={currentPokemon}
          setCurrState={setCurrentPokemon}
          setScore={setCurrentScore}
          currScore={currentScore}
          cardState={setCurrentPokemon}
          setDisplay={setDisplayStatus}
        />
      </div>
    </>
  );
}

export default App;
