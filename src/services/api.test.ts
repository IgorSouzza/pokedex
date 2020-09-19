import api from './api';

import { Pokemon } from 'models/pokemon.model';
import { ApiResponse } from 'models/api.model';

test('gets a list of Pokémons', async () => {
  const pokemons = await api.get<ApiResponse<Pokemon>>('/pokemon');
  expect(pokemons.data.results.length).toEqual(20);
});
