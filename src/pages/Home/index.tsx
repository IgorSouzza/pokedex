import React, { useEffect, useCallback, useState } from 'react';

import api from 'services/api';
import { Pokemon } from 'models/pokemon.model';
import { ApiResponse } from 'models/api.model';

import { Container } from './styles';

import Card from 'components/Card';

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [pagination, setPagination] = useState({ next: '', previous: '' });

  useEffect(() => {
    document.title = 'Poke List';

    api.get<ApiResponse<Pokemon>>('/pokemon').then((res) => {
      const prev = res.data.previous || '';
      const next = res.data.next || '';

      setPokemons(res.data.results);
      setPagination({
        next: next.split('?')[1],
        previous: prev.split('?')[1],
      });
    });
  }, []);

  const nextPage = useCallback(async () => {
    const result = await api.get<ApiResponse<Pokemon>>(`/pokemon?${pagination.next}`);
    const prev = result.data.previous || '';
    const next = result.data.next || '';

    setPokemons(result.data.results)
    setPagination({
      next: next.split('?')[1],
      previous: prev.split('?')[1],
    });

    console.log(result);
  }, [pagination.next]);

  return (
    <Container>
      {pokemons?.map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} />)}
      <button type="button" onClick={nextPage}>Ver mais</button>
    </Container>
  );
}

export default Home;
