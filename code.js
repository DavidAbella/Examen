const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

async function getPokemonList() {
  const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/?limit=151`);
  const data = await response.json();
  return data.results;
}

async function displayPokemonList() {
  const pokemonList = await getPokemonList();

  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Pokédex Kanto';
  document.body.appendChild(titleElement);

  const listElement = document.createElement('ul');
  pokemonList.forEach(pokemon => {
    const listItem = document.createElement('li');
    listItem.textContent = `${pokemon.name} (#${pokemon.url.split('/')[6]})`;
    listElement.appendChild(listItem);
  });

  document.body.appendChild(listElement);
}
displayPokemonList();

async function searchPokemon(pokemonName) {
  const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemonName.toLowerCase()}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
}

function onSearchPokemon(event) {
  event.preventDefault();
  const searchFormElement = document.getElementById('search-input');
  const pokemonName = searchFormElement.value.trim();
  searchFormElement.value = '';

  searchPokemon(pokemonName).then(pokemon => {
    if (!pokemon) {
      alert('Pokemon not found');
      return;
    }

    const divPokemonInfo = document.getElementById('pokemon-info');
    let types = pokemon.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    types = types.join('');

    divPokemonInfo.innerHTML = `
      <h3>Character Info</h3>
      <p>Name: ${pokemon.name}</p>
      <p>Id: ${pokemon.id}</p>
      <p>Type: ${types}</p>
      <p><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}"></p>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-form').addEventListener('submit', onSearchPokemon);
  const divPokemonInfo = document.createElement('div');
  divPokemonInfo.id = 'pokemon-info';
  document.body.appendChild(divPokemonInfo);
});

function addPokemonToTeam(pokemonName) {
  const teamElement = document.getElementById('team');
  if (!teamElement) {
    const newTeamElement = document.createElement('ul');
    newTeamElement.id = 'team';
    document.body.appendChild(newTeamElement);
  }

  searchPokemon(pokemonName).then(pokemon => {
    if (!pokemon) {
      alert('Pokemon not found');
      return;
    }

    const teamList = document.getElementById('team');
    if (teamList.children.length >= 6) {
      alert('Team is full. You can only have 6 Pokémon in your team.');
      return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${pokemon.name} (#${pokemon.id})`;
    teamList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const addToTeamButton = document.createElement('button');
  addToTeamButton.textContent = 'Add to Team';
  addToTeamButton.addEventListener('click', () => {
    const searchFormElement = document.getElementById('search-input');
    const pokemonName = searchFormElement.value.trim();
    addPokemonToTeam(pokemonName);
  });
  document.body.appendChild(addToTeamButton);
});


/*
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
}*/

  