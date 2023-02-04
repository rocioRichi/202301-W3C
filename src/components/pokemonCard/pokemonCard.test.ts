import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PokemonCard } from './pokemonCard';

describe('Given PokemonCard component', () => {
  test('should first', () => {
    document.body.innerHTML = '<ul></ul>';

    const element = new PokemonCard('ul', {
      id: 16,
      name: 'Sun',
      sprite: 'http://www.google.com',
      weight: 2,
      pokemonTypes: [],
    });
    expect(element).toBeInstanceOf(PokemonCard);
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
  });
});
