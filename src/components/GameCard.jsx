import "../styles/GameCardStyle.css";

// what an individual gamecard should look like

function CreateGameCard({ imageSource, cardName }) {
  return (
    <div className="card">
      <img src={imageSource} className="cardImg"></img>
      <span className="cardHeading">{cardName}</span>
    </div>
  );
}

export { CreateGameCard };
