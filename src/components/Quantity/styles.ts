import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.85rem;
  border-radius: 6px;

  > button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
