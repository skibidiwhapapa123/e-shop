import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: var(--Purple);
  color: var(--Yellow);
  border-radius: 0.25rem;
  padding: 0.2rem 0.4rem;
  curson: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--darkGreen);
    border: 0.05rem solid var(--Yellow);
  }
`;
