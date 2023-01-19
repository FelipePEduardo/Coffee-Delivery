import styled from 'styled-components'

export const HeaderTitleContainer = styled.header`
  margin-top: 10rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    max-width: 58.8rem;
  }

  img {
    max-width: 47.6rem;
    max-height: 36rem;
  }
`

export const TitleTextContainer = styled.div`
  margin-bottom: 6.7rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const VantagesContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 1.2rem;
  }
`

const BaseBackgroundIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const BackgroundShoppingCartContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const BackgroundPackageContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const BackgroundTimerContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme.yellow};
`

export const BackgroundCoffeeContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme['purple-dark']};
`

export const MainContainer = styled.main`
  margin-top: 13.9rem;
  margin-bottom: 15.7rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    margin-bottom: 3.4rem;
  }

  > div {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
