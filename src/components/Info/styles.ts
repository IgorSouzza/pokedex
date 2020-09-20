import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  .close {
    position: absolute;
    top: 0px;
    right: 10px;

    border: none;
    background: none;
    color: var(--color-blue);
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  position: relative;

  height: 100vh;
  width: 100vw;

  @media (min-width: 901px) {
    height: 50vh;
    width: 50vw;
  }
`;
