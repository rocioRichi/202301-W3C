import { PokemonList } from './components/pokemonList/pokemonList';

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then((response) => response.json())
  .then((pokemonList) => {
    console.log(pokemonList);
  });
