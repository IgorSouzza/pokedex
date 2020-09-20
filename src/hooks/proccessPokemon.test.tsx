import { renderHook, act } from '@testing-library/react-hooks';

import api from 'services/api';
import { usePokemon } from './processPokemon';

import { Pokemon } from 'models/pokemon.model';
import { ApiResponse } from 'models/api.model';

describe('ProccessPokemon Hook', () => {
  it('should be able to get pokemon image', async () => {
    const apiResult = await api.get<ApiResponse<Pokemon>>('/pokemon');
    const { result } = renderHook(() => usePokemon());
    const iconUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

    act(() => {
      result.current.setPokemons(apiResult.data.results);
    });

    if (!result.current.pokemons) return;

    expect(result.current.pokemons[0].icon).toEqual(iconUrl);
  });
});
