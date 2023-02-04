import { PokemonType } from './PokemonType';

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public weight: number,
    public sprite: string,
    public pokemonTypes: PokemonType[]
  ) {}
}
