const POKEAPI_BASE_URL = 'https://pokeapi.co/';

async function getPokemonList() {
    const response = await fetch(`${POKEAPI_BASE_URL}/films/`);
    const data = await response.json();
    
  }