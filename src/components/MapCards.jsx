import { Fragment } from "react";
import { CreateGameCard } from "./GameCard";

// this function will go through the state and map cards

function MapDisplayCards({ currentState }) {
  const displayCards = currentState.map((card) => (
    <Fragment key={card.id}>
      <CreateGameCard imageSource={card.picUrl} cardName={card.name} />
    </Fragment>
  ));

  //   console.log("logging MapDisplayCard function");
  //   console.log(displayCards);
  //   console.log(currentState[0].name);
  return <div className="cardList">{displayCards}</div>;
}

export { MapDisplayCards };
