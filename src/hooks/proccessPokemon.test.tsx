import { renderHook, act } from '@testing-library/react-hooks';

import { usePokemon } from './processPokemon';

import { Pokemon } from 'models/pokemon.model';

const apiResponseMock: Pokemon[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    name: 'bulbasaur2',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
  {
    name: 'bulbasaur3',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  }
];

describe('ProccessPokemon Hook', () => {
  it('should be able to get pokemon image', async () => {
    const { result } = renderHook(() => usePokemon());
    const iconUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

    act(() => {
      result.current.setPokemons(apiResponseMock);
    });

    if (!result.current.pokemons) return;

    expect(result.current.pokemons[0].icon).toEqual(iconUrl);
  });
});
