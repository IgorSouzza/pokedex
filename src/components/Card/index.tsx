import React from 'react';

import { CardProps } from 'models/card.model';
import { Pokemon } from 'models/pokemon.model';

import { Container } from './styles';

const Card: React.FC<CardProps<Pokemon>> = ({ pokemon }) => {
  return (
    <Container>
      <h1>{pokemon.name}</h1>
    </Container>
  );
};

export default Card;
