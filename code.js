const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';
const globalPokemon = {};

async function getPokemonList() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/?limit=151`);
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

    let types = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    types = types.join('');

    divPokemonInfo.innerHTML= `
      <h3>Character Info</h3>
      <p>Name: ${pokemon.name}</p>
      <p>Id:  ${pokemon.id}</p>
      <p>Type: ${pokemon.types}</p>
      <p><img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"></p>
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


async function onDisplayPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const data = await response.json();
  
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


//async function onSearchPokemon(this){
  
//}


  