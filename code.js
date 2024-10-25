const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

async function getPokemonList() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/`);
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const data = await response.json();
  }

function onSearchPokemon() {
  const pokemonList = data.results;
  const formElements = form.elements;
  const searchFormElement = formElements.search;
  const pokemonName = searchFormElement.value;
  searchFormElement.value = '';
  searchPokemon(pokemonName).then(async (pokemon) => {
    if (!pokemon) {
      alert('pokemon not found');
      return;
    }
    divPokemonInfo.innerHTML= `
      <h3>Character Info</h3>
      <p>Name: ${pokemon.name}</p>
      <p>Type: ${character.height}</p>
      <p>Img: ${character.mass}</p>
      <button id="view-films-button" onclick="getPokemonList('${pokemon.url}')">View Pokemon</button>
    `;
  });

  document.body.appendChild(listElement);

  return false;
}


/*
async function displayPokemonList(){
  const response = await fetch(`${SWAPI_BASE_URL}/pokemon/?limit=151'`);
  const jsonResponse = await response.json();
  const filmsArray = jsonResponse.results;
  return filmsArray;
}
*/

/*
function onDisplayPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const data = await response.json();
  const pokemonList = data.results;
  const formElements = form.elements;
  const searchFormElement = formElements.search;
  const pokemonName = searchFormElement.value;

  displayPokemonList(pokemonName).then(async (pokemon) =>  {
    if (!character) {
      alert('pokemon not found');
      return;
    }
    
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Pokédex Kanto';
    document.body.appendChild(titleElement);
  
    const listElement = document.createElement('ul');
    pokemonList.forEach(pokemon => {
      const listItem = document.createElement('li');
      // listItem.textContent = pokemon.name;
      listItem.textContent = `${pokemon.name} (#${pokemon.url.split('/')[6]})`;
      listElement.appendChild(listItem);
    });
  
    document.body.appendChild(listElement);
    
  }

  return false;

}
*/

//async function onSearchPokemon(this){
  
//}


  