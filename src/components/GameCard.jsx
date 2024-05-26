// what an individual gamecard should look like

function CreateGameCard(imageSource, cardName) {
  return (
    <>
      <div className="card">
        <img src={imageSource}></img>
        <div>
          <h2>{cardName}</h2>
        </div>
      </div>
    </>
  );
}

export { CreateGameCard };
