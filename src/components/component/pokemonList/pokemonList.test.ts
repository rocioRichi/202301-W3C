import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PokemonList } from './pokemonList';

describe('Given PokemonList component', () => {
  test('should first', () => {
    document.body.innerHTML = '<main></main>';

    const element = new PokemonList('main');
    expect(element).toBeInstanceOf(PokemonList);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });
});
