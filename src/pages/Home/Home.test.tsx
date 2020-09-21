import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('should be able to have title', async () => {
    render(<Home />);
    await waitFor(() => expect(document.title).toEqual("Poke List"));
  });

  it('should be able to load more pokemons', async () => {
    const { getByTestId, getByText } = render(<Home />);

    const buttonElement = getByText('Ver mais');

    act(() => {
      fireEvent.click(buttonElement);
    });

    const pokemonListElement = getByTestId('pokemonlist');

    await waitFor(() => expect(pokemonListElement.children).toHaveLength(20));
  });
});
