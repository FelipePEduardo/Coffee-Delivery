import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > div {
    display: flex;
    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }
  }

  > span {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.8rem;

    > button {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: none;
      border-radius: 6px;
      font-size: 1.2rem;
      line-height: 160%;
      text-transform: uppercase;
      background: ${(props) => props.theme['base-button']};
      padding: 0.8rem;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }

      span {
        height: 1.4rem;
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

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
