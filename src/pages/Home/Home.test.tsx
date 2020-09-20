import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './index';

const nextPage = jest.fn();

describe('Home', () => {
  it('should be able to load more pokemons', async () => {
    const { getByText } = render(<Home />);

    const buttonElement = getByText('Ver mais');

    fireEvent.click(buttonElement);

    expect(nextPage).toHaveBeenCalledTimes(1);
  });
});
