import { Pokemon } from '../../models/poke-models/pokemon';
import { Component } from '../component/component';

export class PokemonCard extends Component {
  constructor(public selector: string, public pokemon: Pokemon) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
<li class="card"><span>${this.pokemon.name}</span>
           <span>${this.pokemon.sprite}</span>
        </li>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
