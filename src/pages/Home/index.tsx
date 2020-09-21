import React, { useEffect, useCallback, useState } from 'react';

import api from 'services/api';
import { Pokemon } from 'models/pokemon.model';
import { ApiResponse } from 'models/api.model';

import { usePokemon } from 'hooks/processPokemon';

import { Container, PokemonContainer } from './styles';

import Card from 'components/Card';
import Button from 'components/Button';

const Home = () => {
  const [pagination, setPagination] = useState({ next: '', previous: '' });
  const { setPokemons, pokemons } = usePokemon();

  useEffect(() => {
    let isMounted = true;
    document.title = 'Poke List';

    api.get<ApiResponse<Pokemon>>('/pokemon').then((res) => {
      if (isMounted) {
        const prev = res.data.previous || '';
        const next = res.data.next || '';

        setPokemons(res.data.results);
        setPagination({
          next: next.split('?')[1],
          previous: prev.split('?')[1],
        });
      }
    });

    return () => { isMounted = false };
  }, [setPokemons]);

  const nextPage = useCallback(async () => {
    const result = await api.get<ApiResponse<Pokemon>>(`/pokemon?${pagination.next}`);
    const prev = result.data.previous || '';
    const next = result.data.next || '';

    const newPokemons = pokemons?.concat(result.data.results);

    if (!newPokemons) return;

    setPokemons(newPokemons);
    setPagination({
      next: next.split('?')[1],
      previous: prev.split('?')[1],
    });
  }, [pagination.next, pokemons, setPokemons]);

  return (
    <Container>
      <PokemonContainer data-testid="pokemonlist">
        {pokemons?.map((pokemon) =>
          <Card key={pokemon.name} pokemon={pokemon} />
        )}
      </PokemonContainer>
      <Button onClick={nextPage}>Ver mais</Button>
    </Container>
  );
}

export default Home;
