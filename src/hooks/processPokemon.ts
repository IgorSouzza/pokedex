import { useState, useCallback } from 'react';

import { Pokemon } from 'models/pokemon.model';

function getPokemonId(url: string) {
  const splitedUrl = url.split('/');
  const pokeId = splitedUrl.pop() || splitedUrl.pop();
  const finalUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  return finalUrl;
}

const usePokemon = () => {
  const [pokemons, setPokemonlist] = useState<Pokemon[]>();

  const setPokemons = useCallback((pokemonList: Pokemon[]) => {
    pokemonList.map((pokemon) => {
      pokemon.icon = getPokemonId(pokemon.url);

      return pokemon;
    });

    setPokemonlist(pokemonList);

    return pokemonList;
  }, []);

  return { setPokemons, pokemons };
};

export { usePokemon };
