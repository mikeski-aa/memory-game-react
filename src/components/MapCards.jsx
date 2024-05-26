import { CreateGameCard } from "./GameCard";

// this function will go through the state and map cards

function MapDisplayCards({ currentState }) {
  return (
    <div className="cardSection">
      {currentState.map((card) => {
        <>
          <CreateGameCard
            key={card.id}
            imageSource={card.picUrl}
            cardName={card.name}
          />
        </>;
      })}
    </div>
  );
}

export { MapDisplayCards };
