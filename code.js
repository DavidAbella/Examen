const POKEAPI_BASE_URL = 'https://pokeapi.co/';

async function getPokemonList() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/`);
    const data = await response.json();
  }

async function displayPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const data = await response.json();
  const pokemonList = data.results;

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

displayPokemonList();


async function onSearchPokemon(this){
  
}


  