import React from 'react';

import { CardProps } from 'models/card.model';
import { Pokemon } from 'models/pokemon.model';

import { Container } from './styles';

import Button from 'components/Button';

const Card: React.FC<CardProps<Pokemon>> = ({ pokemon }) => {
  return (
    <Container>
      <img src={pokemon.icon} alt="Imagem do pokemon"/>
      <p>Nome: {pokemon.name}</p>
      <Button>Detalhes</Button>
    </Container>
  );
};

export default Card;
