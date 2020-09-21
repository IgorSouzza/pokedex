import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-card-bg);
  border-radius: 8px;
  color: var(--color-black);

  display: flex;
  flex-direction: column;

  font-size: 12px;
  padding: 8px;
  height: 200px;
  width: 150px;

  img {
    background: var(--color-card-img);
    border-radius: 8px;
    width: 100%;
    height: 130px;
  }

  p {
    margin-top: 8px;

    span {
      text-transform: capitalize;
    }
  }

  button {
    margin: 8px 0 0 auto;
  }
`;
