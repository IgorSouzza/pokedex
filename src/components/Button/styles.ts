import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-blue);
  border: none;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 12px;
  padding: 5px 10px;
  transition: 0.5s ease;

  &:hover {
    background: var(--color-blue-dark);
  }
`;
