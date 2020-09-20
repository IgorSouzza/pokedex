import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 768px) {
    & > button {
      display: block;
      margin: 40px auto;
      width: 30vw;
    }
  }
`;


export const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  justify-items: center;
  margin: 8px;

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 901px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
