import { Fragment } from "react";
import { CreateGameCard } from "./GameCard";
import { CardClickHandler } from "./CardClickHandler";

// this function will go through the state and map cards

function MapDisplayCards({
  currentState,
  setCurrState,
  setScore,
  currScore,
  cardState,
  setDisplay,
}) {
  const displayCards = currentState.map((card) => (
    <Fragment key={card.id}>
      <CreateGameCard
        imageSource={card.picUrl}
        cardName={card.name}
        handleAction={() =>
          CardClickHandler(
            card.prevSelected,
            card.id,
            currentState,
            setCurrState,
            setScore,
            currScore,
            cardState,
            setDisplay
          )
        }
      />
    </Fragment>
  ));

  return <div className="cardList">{displayCards}</div>;
}

export { MapDisplayCards };
