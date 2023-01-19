import styled from 'styled-components'

export const BackgroundCardContainer = styled.div`
  width: 25.6rem;
  max-height: 31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  > img {
    margin-top: -3.8rem;
    margin-bottom: 1.2rem;
  }

  > h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 3.3rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 0.4rem 0.8rem;
    margin-bottom: 1.6rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const FooterCoffeeCard = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 1.4rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
    }
  }

  > div {
    height: 3.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: none;
      padding: 0.8rem;
      border-radius: 6px;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
