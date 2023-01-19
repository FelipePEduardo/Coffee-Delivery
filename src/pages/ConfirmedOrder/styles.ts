import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  margin-top: 8rem;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 130%;

      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-size: 2rem;
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 4rem;
    }
  }
`

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 6px 36px;

  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3.2rem;

  div {
    display: flex;
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

export const BackgroundMapPinContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme.purple};
`

export const BackgroundTimerContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme.yellow};
`

export const BackgroundCurrencyDollarContainer = styled(BaseBackgroundIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`
