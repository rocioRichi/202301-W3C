import { Component } from '../component';
import './list.scss';

export class PokemonList extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
   <section class="pokemons"><ul class ="pokemonul">
       </ul></section>`;
  }
}
