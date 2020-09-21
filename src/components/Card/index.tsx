import React, { useCallback, useRef } from 'react';

import { CardProps } from 'models/card.model';
import { Pokemon } from 'models/pokemon.model';

import { Container } from './styles';

import Button from 'components/Button';
import Info, { ModalHandles } from 'components/Info';

const Card: React.FC<CardProps<Pokemon>> = ({ pokemon }) => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    if (!modalRef) return;

    modalRef.current?.openModal();
  }, []);

  return (
    <Container>
      <img src={pokemon.icon} alt={`Imagem do pokemon ${pokemon.name}`}/>
      <p><b>Nome:</b> <span>{pokemon.name}</span></p>
      <Info ref={modalRef} data-testid="card-modal">Em breve</Info>
      <Button onClick={handleOpenModal}>Detalhes</Button>
    </Container>
  );
};

export default Card;
