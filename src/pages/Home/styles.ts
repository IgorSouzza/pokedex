import styled from 'styled-components';

export const Container = styled.div`
  max-width: 150px;
  margin: 0 auto;

  & > button {
    display: block;
    margin-top: 8px;
    width: 100%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    max-width: 450px;
    margin: 8px auto;
  }

  @media (min-width: 901px) {
    max-width: 782px;
    margin: 8px auto;
  }
`;


export const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  justify-items: center;

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 901px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
