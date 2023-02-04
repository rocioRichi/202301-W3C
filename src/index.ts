import { PokemonCard } from './components/pokemonCard/pokemonCard';
import { PokemonList } from './components/pokemonList/pokemonList';
import { Pokemon } from './models/poke-models/pokemon';

const pokemonList = new PokemonList('main');

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then((response) => response.json())
  .then((responseApi) => {
    console.log(responseApi);

    responseApi.results.forEach((pokemon: { name: string; url: string }) => {
      fetchPokemon(pokemon);
    });
  });

const fetchPokemon = (pokemon: { name: string; url: string }) => {
  fetch(pokemon.url)
    .then((response) => response.json())
    .then((item) => {
      console.log(item);
      const pokemonModel = new Pokemon(
        item.id,
        item.name,
        item.weight,
        item.sprites.front_default,
        []
      );
      new PokemonCard('ul', pokemonModel);
    });
};
