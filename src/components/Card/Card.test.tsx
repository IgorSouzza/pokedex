import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Pokemon } from 'models/pokemon.model';

import Card from './index';


const pokemon: Pokemon = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};

describe('Card', () => {
  it('should be able to open info modal', async () => {
    const { getByText, queryByTestId } = render(<Card pokemon={pokemon} />);

    const buttonElement = getByText("Detalhes");

    act(() => {
      fireEvent.click(buttonElement);
    });

    await waitFor (() => expect(queryByTestId('card-modal')).not.toEqual(null));
  });
});
