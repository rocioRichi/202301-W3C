import { PokemonCard } from './components/pokemonCard/pokemonCard';
import { PokemonList } from './components/pokemonList/pokemonList';
import { Pokemon } from './models/poke-models/pokemon';

const pokemonList = new PokemonList('main');

const fetchPokemon = async (pokemon: { name: string; url: string }) => {
  const response = await fetch(pokemon.url);
  const pokemonApi = await response.json();

  const pokemonModel = new Pokemon(
    pokemonApi.id,
    pokemonApi.name,
    // (pokemonApi.name =
    //   pokemonApi.name[0].toUpperCase() + pokemonApi.substring(1)),

    pokemonApi.weight,
    pokemonApi.sprites.front_default,
    []
  );
  new PokemonCard('ul', pokemonModel);
  return pokemonModel;
};

async function getPokemon() {
  const responseApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');

  const pokemonsApi = await responseApi.json();
  const sortedPokemons = pokemonsApi.results.reverse();
  for (const pokemonApi of sortedPokemons) {
    await fetchPokemon(pokemonApi);
  }
}
getPokemon();
