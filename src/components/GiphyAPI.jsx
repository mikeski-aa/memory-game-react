// this function is to fetch data from Giphy's API
// this will likely not be needed as I will not be using Giphy's API for this project

async function getPicture(searchItem) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Zf0QL7k2j2O0uwHY5cpCXjxDeUPRcTjs&q=${searchItem}&limit=1&offset=0&rating=r&lang=en&bundle=messaging_non_clips`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const json = await response.json();

      return json;
    }
  } catch (error) {
    alert("Ooops something went wrong with Giphy's API " + error);
  }
}

function displaySearchResult(searchItem, setState, currentState) {
  getPicture(searchItem).then((json) => {
    setState(json.data[0].images.original.url);
  });
}

export { displaySearchResult };
